package tractivity.app_manager.helpers.testHelpers;

import Model.NurseryFieldData;
import PageObjectModel.DashboardPOM;
import PageObjectModel.GlobalPOM;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import tractivity.app_manager.helpers.HelpersBase;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class DashboardHelpers extends HelpersBase {
    public DashboardHelpers(WebDriver driver) {
        super(driver);
    }
    CommonHelpers commonHelpers = new CommonHelpers(driver);
    DashboardPOM dashboardPOM = new DashboardPOM(driver);
    GlobalPOM globalPOM = new GlobalPOM();

    public void createNF(NurseryFieldData nurseryFieldData) {
        initNurseryFieldCreation();
        commonHelpers.switchToModal();
        fillOutNurseryFieldForm(nurseryFieldData);
        submitNFCreation();
    }

    public float countSREs() {
        float sumActiveSre = 0;
        List<WebElement> size = driver.findElements(By.xpath("//div[@col-id='size']"));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@col-id='size']")));
        for (int i = 1; i < size.size(); i++) {
            if (size.get(i).getCssValue("color").equalsIgnoreCase("rgba(0, 0, 0, 0.87)")) {
                sumActiveSre += Float.parseFloat(size.get(i).getText());
            }
        }
        return sumActiveSre;
    }

    public void detailsView() { click(By.id("scrollable-auto-tab-1")); }

    public void fillOutNurseryFieldForm(NurseryFieldData nurseryFieldData) {
        Calendar calendar = Calendar.getInstance();
        int year = calendar.get(Calendar.YEAR);

        click(dashboardPOM.location());
        click(By.xpath("//li[contains(text(),'" + nurseryFieldData.getLocation() + "')]"));

        click(dashboardPOM.fieldYear());
        click(By.xpath("//li[contains(text(),'" + year + "')]"));

        click(dashboardPOM.field());
        driver.findElements(By.className("field")).get(5).click();

        click(dashboardPOM.nurseryType());
        click(By.xpath("//li[contains(text(),'" + nurseryFieldData.getType() + "')]"));

        type(dashboardPOM.size(), "3425");

        click(globalPOM.priority());
        click(By.xpath("//li[contains(text(),'" + nurseryFieldData.getPriority() + "')]"));

        type(By.id("pottingDate"),nurseryFieldData.getPottingDate());
        type(dashboardPOM.forecastDate(), nurseryFieldData.getForecastDate());
        type(By.id("vcr0"), nurseryFieldData.getVrcId());
    }

    public void initNurseryFieldCreation() {
        click(By.id("createNF"));
    }

    public boolean isLoaded() {
        wait.until(ExpectedConditions.visibilityOf(driver.findElement(dashboardPOM.statusTable()))).isDisplayed();
        return isElementPresent(dashboardPOM.statusTable());
    }

    public boolean isThereANurseryFieldWithType() {
        return driver.findElements(By.xpath("//div[@col-id='id_1']")).size() > 1;
    }

    public boolean invalidFieldMsg() {
        return dashboardPOM.invalidFieldFeedback().isDisplayed();
    }

    public boolean invalidTypeMsg() {
        return dashboardPOM.invalidNurseryTypeFeedback().isDisplayed();
    }

    public boolean invalidSizeMsg() {
        return dashboardPOM.invalidSizeFeedback().isDisplayed();
    }

    public boolean invalidForecastedDateMsg() {
        return dashboardPOM.invalidForecastDateFeedback().isDisplayed();
    }

    public String selectNurseryTypeAndUpdate(String value) {
        commonHelpers.expandDetailsViewTable();
        List<WebElement> nam = driver.findElements(By.xpath("//div[@col-id='type']"));
        System.out.println(nam.get(1).getText());
        Actions actions = new Actions(driver);
        actions.doubleClick(nam.get(1)).perform();
        selectByText(By.xpath("//div[@class='ag-popup-editor ag-ltr ag-popup-child']//select"), value);
        return driver.findElement(By.xpath("//div[@class='ag-popup-editor ag-ltr ag-popup-child']//select")).getAttribute("value");
    }

    public void saveUpdatedNurseryType() {
        driver.findElement(By.xpath("//div[@class='ag-popup-editor ag-ltr ag-popup-child']//select")).sendKeys(Keys.ENTER);
    }

    public ArrayList<String> statusTableHeaders() {
        ArrayList<String> headers = new ArrayList<>();

        for (int i = 1; i < dashboardPOM.StatusViewTableHeader().size(); i++) {
            headers.add(dashboardPOM.StatusViewTableHeader().get(i).getText());
        }
        return headers;
    }

    public void submitNFCreation() {
        driver.findElement(By.xpath("//div[3]/button[2]/span")).click();
    }

    public float totalActiveSREs() {
        return Float
                .parseFloat(
                        driver.findElement(By.xpath("//button[@id='total-active-sre']//span"))
                        .getText().replaceAll("TOTAL ACTIVE SRES: ", "")
                );
    }

    public String timelineDate() {
        return driver.findElement(By.className("time-label")).getText();
    }

    public ArrayList<String> timelineDates() {
        ArrayList<String> timelineDates = new ArrayList<>();
        List<WebElement> dates = driver.findElements(By.className("time-label"));

        for (WebElement date : dates) {
            timelineDates.add(date.getText());
        }
        return timelineDates;
    }

    public boolean isThereANurseryField() {
        return isElementPresent(By.id("myGrid"));
    }
}
