package tractivity.app_manager.helpers;

import PageObjectModel.DashboardPOM;
import PageObjectModel.GlobalPOM;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;
import java.util.Random;

public class NavigationHelper extends HelpersBase {

    DashboardPOM dashboardPOM = new DashboardPOM(driver);
    // String API_URL = "https://tractivity.breeding-np.ag";
    String API_URL = "http://localhost:8080/kihei";

    public NavigationHelper(WebDriver driver) {
        super(driver);
    }

    GlobalPOM globalPOM = new GlobalPOM();

    public void addActivityPage() {
        if (isElementPresent(dashboardPOM.statusTable())) {
            jsHandler("return document.getElementById('autosize-all').click();");
            jsHandler("return document.getElementById('auto-fix-status').click();");
            List<WebElement> list = driver.findElements(By.xpath("//input[@class='ag-input-field-input ag-checkbox-input']"));
            click(By.xpath("//input[@id='ag-input-id-224']"));
            click(By.className("add-events-btn"));
        }
    }

    public void homePage() {
        click(globalPOM.backToHome());
    }

    public void trackActivityPage() {
        click(globalPOM.viewEventBtn());
    }

}
