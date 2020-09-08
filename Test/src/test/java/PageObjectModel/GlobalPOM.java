package PageObjectModel;

import org.openqa.selenium.By;

public class GlobalPOM {

    private final By priority = By.id("priority");
    public By priority() {return priority; }

    private final By modalHeader = By.id("title");
    private final By modalOkBtn = By.id("ok");
    private final By backToHome = By.id("backToHome");
    private final By viewEventBtn = By.className("view-events-btn");


    public By modalHeader() { return modalHeader; }
    public By modalOkBtn() { return modalOkBtn; }
    public By backToHome() { return backToHome; }
    public By viewEventBtn() { return viewEventBtn; }
}
