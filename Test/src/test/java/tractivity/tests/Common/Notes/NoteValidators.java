package tractivity.tests.Common.Notes;

import org.testng.Assert;
import org.testng.annotations.Test;
import tractivity.app_manager.TestBase;

public class NoteValidators extends TestBase {
    @Test(groups = {"NoteValidators", "validateNoteInputs"})
    public void validateNoteInputs() {
        if (app.dashboard().isLoaded()) {
            app.dashboard().detailsView();
        }
        app.goTo().addActivityPage();
        app.activities().initNoteCreation();
        app.activities().submitNote();
        Assert.assertTrue(app.activities().invalidNoteMsg());
    }
}
