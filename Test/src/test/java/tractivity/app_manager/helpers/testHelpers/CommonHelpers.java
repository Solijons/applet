package tractivity.app_manager.helpers.testHelpers;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import tractivity.app_manager.helpers.HelpersBase;

public class CommonHelpers extends HelpersBase {
    public CommonHelpers(WebDriver driver) {
        super(driver);
    }

    public void closeModal() {
        click(By.id("Close"));
    }

    public void submit() {
        click(By.id("Submit"));
    }

    public String getDialogText(String id) {
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(By.id(id)).findElement(By.tagName("h6")))).isDisplayed();
        return driver.findElement(By.id(id)).findElement(By.tagName("h6")).getText();
    }

    public void fullscreen() {
        driver.manage().window().fullscreen();
    }

    public void expandDetailsViewTable() {
        jsHandler("return document.getElementById('auto-fix').click();");
    }

    public void switchToModal() {
        driver.switchTo();
    }


    public void refreshPage() {
        driver.navigate().refresh();
    }
}
