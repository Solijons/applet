package PageObjectModel;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import tractivity.app_manager.helpers.HelpersBase;

import java.util.List;

public class DashboardPOM extends HelpersBase {

    private final By agStatusIdSize = By.xpath("//div[@col-id='id']");
    private final By agStatusFieldSize = By.xpath("//div[@col-id='0']");
    private final By statusTable = By.id("status-table");

    private final By StatusViewTableHeader = By.xpath("//span[@class='ag-header-cell-text']");
    private final By DetailsViewTableHeader = By.xpath("//div[@id='myGrid']//div//div[@class='ag-header-viewport']//div[@class='ag-header-row']");

    // Feedback messages
    private final By invalidFieldFeedback = By.xpath("//p[contains(text(),'Please select a field.')]");
    private final By invalidNurseryTypeFeedback = By.xpath("//p[contains(text(),'Please select a nursery type.')]");
    private final By invalidSizeFeedback = By.xpath("//p[contains(text(),'Please input nursery size.')]");
    private final By invalidForecastDateFeedback = By.xpath("//p[contains(text(),'Please select a forecasted planting date.')]");
    private final By invalidVCRIDFeedback = By.xpath("//p[contains(text(),'Please provide a valid VCR ID')]");

    private final By field = By.id("field");

    public By field() { return field; }

    private final By location = By.id("location");
    public By location() { return location; }

    private final By fieldWeek = By.id("fieldWeek");
    public By fieldWeek() { return fieldWeek; }

    private final By fieldYear = By.id("fieldYear");
    public By fieldYear() { return fieldYear; }

    private final By nurseryType = By.id("type");
    public By nurseryType() {return nurseryType; }

    private final By size = By.id("size");
    public By size() { return size; }

    private final By forecastDate = By.id("forecastDate");
    public By forecastDate() {return forecastDate; }

    private By agFieldSizeTable = By.xpath("//div[@col-id='field']");

    public DashboardPOM(WebDriver driver) {
        super(driver);
    }

    public List<WebElement> agStatusIdSize() { return driver.findElements(agStatusIdSize); }
    public List<WebElement> agStatusFieldSize() {return driver.findElements(agStatusFieldSize); }
    public By statusTable() { return statusTable; }

    public List<WebElement> StatusViewTableHeader() { return driver.findElements(StatusViewTableHeader); }
    public WebElement DetailsViewTableHeader() { return driver.findElement(DetailsViewTableHeader); }

    public WebElement invalidFieldFeedback() { return driver.findElement(invalidFieldFeedback); }
    public WebElement invalidNurseryTypeFeedback() { return driver.findElement(invalidNurseryTypeFeedback); }
    public WebElement invalidSizeFeedback() { return driver.findElement(invalidSizeFeedback); }
    public WebElement invalidForecastDateFeedback() { return driver.findElement(invalidForecastDateFeedback); }
    public WebElement invalidVCRIDFeedback() { return driver.findElement(invalidVCRIDFeedback); }

    public List<WebElement> agFieldSizeTable() { return driver.findElements(agFieldSizeTable); }

}
