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

FormatTime uses interpret_year to decide whether to go with date in 1900 or in 2000 for a two digit year. 
For Example, Should 91 be interpreted as 1991 or 2091.
Default is 20, meaning any year within 20 years from current year going forward will be in 2000, or else they will be in 1900.
By default, 31 is changed to 2031 and 34 is 1934, unless you set a different number.

Example usages:
$(".date").formatDate({interpret_year:10}); -> 092322 -> 09/23/2022
$(".date").formatDate({interpret_year:10}); -> 092325 -> 09/23/1925


Format Time: Transforms time into a representable time format (00:00 AM/PM)
$(".time").formatTime();

Examples usages:
30 -> 0:30
1120pm -> 11:20 PM
1030a.m -> 10:30 AM