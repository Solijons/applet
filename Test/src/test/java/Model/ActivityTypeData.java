package Model;

public class ActivityTypeData {
    private int id;
    private String team;
    private String activityType;

    public int getId() {
        return id;
    }

    public ActivityTypeData withId(int id) {
        this.id = id;
        return this;
    }

    public String getTeam() {
        return team;
    }

    public ActivityTypeData withTeam(String team) {
        this.team = team;
        return this;
    }

    public String getActivityType() {
        return activityType;
    }

    public ActivityTypeData withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
}
