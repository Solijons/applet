package tractivity.app_manager;

import org.openqa.selenium.remote.BrowserType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import java.lang.reflect.Method;
import java.util.Arrays;

public class TestBase {

    Logger logger = LoggerFactory.getLogger(TestBase.class);


    protected static final ApplicationManager app
            = new ApplicationManager(System.getProperty("browser", BrowserType.CHROME));

    @BeforeMethod(alwaysRun = true)
    public void setUp() throws Exception {
        app.init();
    }

    @AfterMethod(alwaysRun = true)
    public void tearDown() throws Exception {
        app.stop();
    }

    //@BeforeMethod(alwaysRun = true)
    public void logTestStart(Method m, Object[] p) {
        // This can be included when tests will be optimized
        logger.info("Start test" + m.getName() + "with parameters" + Arrays.asList(p));
    }

    //@AfterMethod(alwaysRun = true)
    public void logTestStop(Method m, Object[] p) {
        // This can be included when tests will be optimized
        logger.info("Stop test" + m.getName() + "with parameters" + Arrays.asList(p));
    }


    public void verifyEventsListInUI() {
        // Method will be enabled when, set up happens with Database
        if (Boolean.getBoolean("verifyUI")) {
            // Events eventsDb = app.db().events();
            // Events eventsUi = app.tractivity().events();
            // assertThat(eventsUi, equalTo(eventsDb)) -> func test

        }

    }


}
