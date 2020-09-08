package tractivity.app_manager;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.BrowserType;
import tractivity.app_manager.helpers.NavigationHelper;
import tractivity.app_manager.helpers.SessionHelper;
import tractivity.app_manager.helpers.testHelpers.ActivityHelpers;
import tractivity.app_manager.helpers.testHelpers.CommonHelpers;
import tractivity.app_manager.helpers.testHelpers.DashboardHelpers;

import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import static org.testng.Assert.fail;

public class ApplicationManager {
    WebDriver driver;
    private NavigationHelper navigationHelper;
    private final Properties properties;
    private DashboardHelpers dashboardHelpers;
    private CommonHelpers commonHelpers;
    private ActivityHelpers activityHelpers;
    private SessionHelper sessionHelper;
    private StringBuffer verificationErrors = new StringBuffer();
    private String browser;

    public ApplicationManager(String browser) {
        this.browser = browser;
        properties = new Properties();
    }

    public void init()  throws IOException{
        String target = System.getProperty("target", "local");
        properties.load(new FileReader(new File(String.format("src/main/resources/%s.properties", target))));

        switch (browser) {
            case BrowserType.CHROME:
                System.setProperty("webdriver.chrome.driver", "src/chromedriver");
                driver = new ChromeDriver();
                break;
            case BrowserType.FIREFOX:
                driver = new FirefoxDriver();
                break;
            case BrowserType.IE:
                driver = new InternetExplorerDriver();
                break;
        }

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get(properties.getProperty("web.baseUrl"));
        dashboardHelpers = new DashboardHelpers(driver);
        commonHelpers = new CommonHelpers(driver);
        activityHelpers = new ActivityHelpers(driver);
        navigationHelper = new NavigationHelper(driver);

        if (!properties.getProperty("web.baseUrl").toLowerCase().contains("localhost")) {
            sessionHelper = new SessionHelper(driver);
            sessionHelper.login(new MONCreds(properties.getProperty("web.MONUSERNAME"), properties.getProperty("web.MONPASSWORD")));
        }


    }


    public void stop() {
        driver.quit();
        String verificationErrorString = verificationErrors.toString();
        if (!"".equals(verificationErrorString)) {
            fail(verificationErrorString);
        }
    }

    public ActivityHelpers activities() { return activityHelpers; }
    public CommonHelpers common() { return commonHelpers; }
    public DashboardHelpers dashboard() {
        return dashboardHelpers;
    }

    public NavigationHelper goTo() {
        return navigationHelper;
    }

}
