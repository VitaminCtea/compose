function reviewDate(date: Date): string {
    const enum Timer {
        just_now = '刚刚',
        a_minute_ago = '1分钟以前',
        minutes_ago = '分钟以前',
        a_hour_ago = '1小时以前',
        hours_ago = '小时以前',
        yesterday = '昨天',
        days_ago = '天以前',
        a_week_ago = '1周以前',
        weeks_ago = '周以前',
        a_month_ago = '1个月以前',
        months_ago = '个月以前',
        year_ago = '年以前',
    }
    const enum TransformSeconds {
        a_minute_into_seconds = 60,
        two_minute_into_seconds = 120,
        a_hour_into_seconds = 3600,
        two_hours_into_seconds = 7200,
        a_day_into_seconds = 86400
    }
    const enum Days {
        a_week = 7,
        two_week = 14,
        a_month = 30,
        two_months = 60,
        a_year = 365
    }
    const enum WithinTwoDays {
        a_day,
        two_days
    }
    const converting_to_seconds: number = 1000;
    
    const diff: number = ((new Date().getTime() - date.getTime()) / converting_to_seconds);
    const day_diff: number = Math.floor(diff / TransformSeconds.a_day_into_seconds);

    return (day_diff === WithinTwoDays.a_day && 
        (diff < TransformSeconds.a_minute_into_seconds && Timer.just_now || 
        diff < TransformSeconds.two_minute_into_seconds && Timer.a_minute_ago || 
        diff < TransformSeconds.a_hour_into_seconds && (Math.floor(diff / TransformSeconds.a_minute_into_seconds) + Timer.minutes_ago) || 
        diff < TransformSeconds.two_hours_into_seconds && Timer.a_hour_ago || 
        diff < TransformSeconds.a_day_into_seconds && (Math.floor(diff / TransformSeconds.a_hour_into_seconds) + Timer.hours_ago)) || 
        day_diff === WithinTwoDays.two_days && Timer.yesterday || 
        day_diff < Days.a_week && (day_diff + Timer.days_ago) || 
        day_diff < Days.two_week && Timer.a_week_ago || 
        day_diff < Days.a_month && (Math.floor(day_diff / Days.a_week) + Timer.weeks_ago) ||
        day_diff < Days.two_months && Timer.a_month_ago || 
        day_diff < Days.a_year && Math.floor(day_diff / Days.a_month) + Timer.months_ago || 
        Math.floor(day_diff / Days.a_year) + Timer.year_ago);
}
console.log(reviewDate(new Date(2019, 7, 29, 9, 53)));