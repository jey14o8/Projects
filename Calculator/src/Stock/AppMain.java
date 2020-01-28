package Stock;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Scene;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;
import java.io.IOException;




public class AppMain extends Application {

	private Stage primarystage;
	private BorderPane root;
	
	
	
	/**
	 * Start method starts the stage, the stage contains the scenes which is the JAVAX nodes 
	 * @throws IOException 
	 */
	@Override
	public void start(Stage primaryStage) throws IOException {
		this.primarystage = primaryStage;
		this.primarystage.setTitle("StockManagementTool");
		
		initRoot();
	    showStockOverview();
	}
	
	
	 public void initRoot() {
	        try {
	            // Load root layout from fxml file.
	            FXMLLoader loader = new FXMLLoader();
	            loader.setLocation(AppMain.class.getResource("/stockview/RootLayout.fxml"));
	            root = (BorderPane) loader.load();
	            
	            // Show the scene(root)
	            Scene scene = new Scene(root);
	            primarystage.setScene(scene);
	            primarystage.show();
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	    }

	    /**
	     * Shows the stock overview
	     */
	    public void showStockOverview() {
	        try {
	            FXMLLoader loader = new FXMLLoader();
	            loader.setLocation(AppMain.class.getResource("/stockview/stockGUI.fxml"));
	            AnchorPane stockOverview = (AnchorPane) loader.load();
	            
	          
	            root.setCenter(stockOverview);
	        } catch (IOException e) {
	            e.printStackTrace();
	        }
	    }
	    
	    
    public Stage getPrimaryStage() {
		return primarystage;
    }
    
    
	public static void main(String[] args) {
		launch(args);
	}
}
