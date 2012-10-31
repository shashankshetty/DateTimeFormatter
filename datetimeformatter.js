$.fn.formatTime = function () {
    var time = $(this).val().toUpperCase();
    if (time === undefined || time === "") {
        return;
    }
    var isAM = false;
    var isPM = false;
    var index = 0;
    var formatted_time = time;
    var minutes, hours;

    if (time.indexOf("A") > -1 && time.indexOf("M") > -1) {
        index = time.indexOf("A");
        formatted_time = time.substring(0, index - 1).trim();
        isAM = true;
    }
    else if (time.indexOf("P") > -1 && time.indexOf("M") > -1) {
        index = time.indexOf("P");
        formatted_time = time.substring(0, index).trim();
        isPM = true;
    }
    if (formatted_time.indexOf(':') === -1) {
        if (formatted_time.length <= 2) {
            minutes = Number(formatted_time);
            if (minutes >= 1 && minutes <= 59) {
                formatted_time = "0:" + formatted_time;
            }
        }
        else if (formatted_time.length === 3) {
            hours = Number(formatted_time.substring(0, 1));
            minutes = Number(formatted_time.substring(1));
            if ((hours >= 1 && hours <= 9) && (minutes >= 1 && minutes <= 59) && (isAM || isPM)) {
                formatted_time = formatted_time.substring(0, 1) + ":" + formatted_time.substring(1);
            }
            else if ((hours >= 1 && hours <= 23) && (minutes >= 1 && minutes <= 59) && !(isAM || isPM)) {
                formatted_time = formatted_time.substring(0, 1) + ":" + formatted_time.substring(1);
            }
        }
        else if (formatted_time.length === 4) {
            hours = Number(formatted_time.substring(0, 2));
            minutes = Number(formatted_time.substring(2));
            if ((hours >= 1 && hours <= 12) && (minutes >= 1 && minutes <= 59) && (isAM || isPM)) {
                formatted_time = formatted_time.substring(0, 2) + ":" + formatted_time.substring(2);
            }
            else if ((hours >= 1 && hours <= 23) && (minutes >= 1 && minutes <= 59) && !(isAM || isPM)) {
                formatted_time = formatted_time.substring(0, 2) + ":" + formatted_time.substring(2);
            }
        }
        else {
            return;
        }
    }
    if (isAM) {
        formatted_time = formatted_time + " " + "AM";
    }
    if (isPM) {
        formatted_time = formatted_time + " " + "PM";
    }
    $(this).val(formatted_time);
};

$.fn.formatDate = function (opts) {
    opts = jQuery.extend({
        interpret_year:20
    }, opts);

    var date = $(this).val();
    var dateObj = {};

    if (date.indexOf('/') > -1) {
        return;
    }
    if (date.length === 8) {    // mm/dd/yyyy
        dateObj = get_date(2, 4, date);
        if ((dateObj.month >= 1 && dateObj.month <= 12) && (dateObj.day >= 1 && dateObj.day <= 31)) {
            $(this).val(dateObj.display);
        }
        return;
    }
    if (date.length === 6) {    // mm/dd/yy
        dateObj = get_date(2, 4, date);
        if ((dateObj.month >= 1 && dateObj.month <= 12) && (dateObj.day >= 1 && dateObj.day <= 31)) {
            $(this).val(dateObj.display);
        }
        return;
    }
    if (date.length === 7) {    // m/dd/yyyy or mm/d/yyyy
        dateObj = get_date(1, 3, date);
        if ((dateObj.month > 1 && dateObj.month <= 9) && (dateObj.day >= 1 && dateObj.day <= 31)) {
            $(this).val(dateObj.display);
            return;
        }
        dateObj = get_date(2, 3, date);
        if ((dateObj.month >= 1 && dateObj.month <= 9) && (dateObj.day >= 1 && dateObj.day <= 31)) {
            $(this).val(dateObj.display);
        }
    }

    function get_date(i, j, date) {
        var month = date.slice(0, i);
        var day = date.slice(i, j);
        var year = date.slice(j);
        var displayYear = year;

        if (year.length == 2) {
            var currentYear = new Date().getFullYear();
            currentYear = currentYear % 100;
            displayYear = Number(year) > currentYear + opts.interpret_year ? "19" + year : "20" + year
        }

        return {
            month:Number(month),
            day:Number(day),
            year:Number(year),
            display:month + "/" + day + "/" + displayYear
        };
    }
};