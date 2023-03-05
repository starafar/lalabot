module default {
    type User {
        required property snowflake -> int64 {
            constraint exclusive;
        }
    }

    type Character {
        required property ls_id -> int64 {
            constraint exclusive;
        }

        required link owner -> User;

        required property first_name -> str;
        required property last_name -> str;
    }

    scalar type EventId extending sequence;

    type Event {
        required property id -> EventId;
        required property name -> str;

        required property starts_at -> datetime;
        required property runs_for -> duration;

        property tanks -> int16;
        property healers -> int16;
        property dps -> int16;
        property melee -> int16;
        property ranged -> int16;
        property caster -> int16;
        property open -> int16;

        multi link attending -> Registration;
    }

    scalar type Job extending enum<"PLD","WAR","GNB","DRK">;

    type Registration {
        required link character -> Character;
        required property job -> Job;
    }
}
