package tractivity.app_manager.helpers;

import PageObjectModel.GlobalPOM;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

public class HelpersBase {
    protected WebDriver driver;
    protected WebDriverWait wait;
    private boolean acceptNextAlert = true;

    GlobalPOM globalPOM = new GlobalPOM();
    public HelpersBase(WebDriver driver) {
        this.driver = driver;
        wait = new WebDriverWait(driver, 10);
    }

    public void click(final By locator) {
        driver.findElement(locator).click();
    }

    public String getText(final By locator) { return driver.findElement(locator).getText(); }

    public void type(final By locator, final String text) {
        click(locator);
        if (text != null) {
            String existingText = driver.findElement(locator).getAttribute("value");
            if (!text.equals(existingText)) {
                for (int i = 0; i < existingText.length(); i ++) {
                    driver.findElement(locator).sendKeys(Keys.BACK_SPACE);
                }
                driver.findElement(locator).sendKeys(text);
            }
        }
    }

    public void selectByText(final By locator, final String selectText) {
        new Select(driver.findElement(locator)).selectByVisibleText(selectText);
    }

    public void selectByIndex(final By locator, final int selectIndex) {
        new Select(driver.findElement(locator)).selectByIndex(selectIndex);
    }

    public void jsHandler(String action) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        WebDriverWait wait = new WebDriverWait(driver, 10);

        try {
            ExpectedCondition<Boolean> jsLoad = driver -> ((JavascriptExecutor) this.driver)
                    .executeScript("return document.readyState").toString().equals("complete");

            boolean jsReady = js.executeScript("return document.readyState").toString().equals("complete");

            if (!jsReady) {
                wait.until(jsLoad);
            } else {
                js.executeScript(action);
            }

        } catch (WebDriverException ignored) {

        }
    }

    public String getAttrValue(By locator, String attribute) {
        return driver.findElement(locator).getAttribute(attribute);
    }

    public boolean isElementPresent(By by) {
        try {
            driver.findElement(by);
            return true;
        } catch (NoSuchElementException e) {
            return false;
        }
    }

    public boolean isAlertPresent() {
        try {
            driver.switchTo().alert();
            return true;
        } catch (NoAlertPresentException e) {
            return false;
        }
    }

    public boolean isSortedList(ArrayList<? extends Comparable> expectedWeeks) {
        boolean isSorted = true;
        if (expectedWeeks == null || expectedWeeks.isEmpty()) {
            return false;
        }
        if (expectedWeeks.size() == 1) {
            return true;
        }
        for (int i = 1; i < expectedWeeks.size(); i++) {
            if (expectedWeeks.get(i).compareTo(expectedWeeks.get(i - 1)) > 0) {
                isSorted = false;
            }
        }
        return isSorted;
    }

    public String closeAlertAndGetItsText() {
        try {
            Alert alert = driver.switchTo().alert();
            String alertText = alert.getText();
            if (acceptNextAlert) {
                alert.accept();
            } else {
                alert.dismiss();
            }
            return alertText;
        } finally {
            acceptNextAlert = true;
        }
    }

    public void waitUntilWebElement(final WebElement element) {
        new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(30))
                .pollingEvery(Duration.ofSeconds(3))
                .until(d -> {
                    if(element.getText().length() > 8) {
                        return element;
                    }
                    return element;
                });
    }

    public void waitUntilCountChanges(final List<WebElement> elements) {
        new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(30))
                .pollingEvery(Duration.ofSeconds(3))
                .until(d -> {
                    if (elements.size() >= 1) {
                        return true;
                    } else {
                        return false;
                    }
                });
    }

}
