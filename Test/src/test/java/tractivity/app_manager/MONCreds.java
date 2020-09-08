package tractivity.app_manager;

public class MONCreds {
    private final String username;
    private final String password;

    public MONCreds(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }
}
