DateTimeFormatter
=================
Format date and time entries on a form

Usage:

Format Date: Transforms a number into a representable date format (mm/dd/yyyy; mm/dd/yy; mm/d/yyyy; m/dd/yyyy)

$(".date").formatDate();

Example usages:
9232012 -> 9/23/2012
992012 -> 9/9/2012
9122012 -> 9/12/2012

Format Time: Transforms time into a representable time format (00:00 AM/PM)
$(".time").formatTime();

Examples usages:
30 -> 0:30
1120pm -> 11:20 PM
1030a.m -> 10:30 AM