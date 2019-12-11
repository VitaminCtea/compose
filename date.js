function reviewDate(date) {
    var Timer;
    (function (Timer) {
        Timer["just_now"] = "\u521A\u521A";
        Timer["a_minute_ago"] = "1\u5206\u949F\u4EE5\u524D";
        Timer["minutes_ago"] = "\u5206\u949F\u4EE5\u524D";
        Timer["a_hour_ago"] = "1\u5C0F\u65F6\u4EE5\u524D";
        Timer["hours_ago"] = "\u5C0F\u65F6\u4EE5\u524D";
        Timer["yesterday"] = "\u6628\u5929";
        Timer["days_ago"] = "\u5929\u4EE5\u524D";
        Timer["a_week_ago"] = "1\u5468\u4EE5\u524D";
        Timer["weeks_ago"] = "\u5468\u4EE5\u524D";
        Timer["a_month_ago"] = "1\u4E2A\u6708\u4EE5\u524D";
        Timer["months_ago"] = "\u4E2A\u6708\u4EE5\u524D";
        Timer["year_ago"] = "\u5E74\u4EE5\u524D";
    })(Timer || (Timer = {}));
    var TransformSeconds;
    (function (TransformSeconds) {
        TransformSeconds[TransformSeconds["a_minute_into_seconds"] = 60] = "a_minute_into_seconds";
        TransformSeconds[TransformSeconds["two_minute_into_seconds"] = 120] = "two_minute_into_seconds";
        TransformSeconds[TransformSeconds["a_hour_into_seconds"] = 3600] = "a_hour_into_seconds";
        TransformSeconds[TransformSeconds["two_hours_into_seconds"] = 7200] = "two_hours_into_seconds";
        TransformSeconds[TransformSeconds["a_day_into_seconds"] = 86400] = "a_day_into_seconds";
    })(TransformSeconds || (TransformSeconds = {}));
    var Days;
    (function (Days) {
        Days[Days["a_week"] = 7] = "a_week";
        Days[Days["two_week"] = 14] = "two_week";
        Days[Days["a_month"] = 30] = "a_month";
        Days[Days["two_months"] = 60] = "two_months";
        Days[Days["a_year"] = 365] = "a_year";
    })(Days || (Days = {}));
    var WithinTwoDays;
    (function (WithinTwoDays) {
        WithinTwoDays[WithinTwoDays["a_day"] = 0] = "a_day";
        WithinTwoDays[WithinTwoDays["two_days"] = 1] = "two_days";
    })(WithinTwoDays || (WithinTwoDays = {}));
    var converting_to_seconds = 1000;
    var diff = ((new Date().getTime() - date.getTime()) / converting_to_seconds);
    var day_diff = Math.floor(diff / 86400);
    return (day_diff === 0 &&
        (diff < 60 && "\u521A\u521A" ||
            diff < 120 && "1\u5206\u949F\u4EE5\u524D" ||
            diff < 3600 && (Math.floor(diff / 60) + "\u5206\u949F\u4EE5\u524D") ||
            diff < 7200 && "1\u5C0F\u65F6\u4EE5\u524D" ||
            diff < 86400 && (Math.floor(diff / 3600) + "\u5C0F\u65F6\u4EE5\u524D")) ||
        day_diff === 1 && "\u6628\u5929" ||
        day_diff < 7 && (day_diff + "\u5929\u4EE5\u524D") ||
        day_diff < 14 && "1\u5468\u4EE5\u524D" ||
        day_diff < 30 && (Math.floor(day_diff / 7) + "\u5468\u4EE5\u524D") ||
        day_diff < 60 && "1\u4E2A\u6708\u4EE5\u524D" ||
        day_diff < 365 && Math.floor(day_diff / 30) + "\u4E2A\u6708\u4EE5\u524D" ||
        Math.floor(day_diff / 365) + "\u5E74\u4EE5\u524D");
}

module.exports = reviewDate;