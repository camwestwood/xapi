This is the input file for an attendance event.

Data should be supplied as a UTF-8 Tab Seperated File called attendance.tsv

# Attendance TSV Binding
* [STUDENT_ID](#student_id) [1]
* [EVENT_ID](#event_id) [1]
* [EVENT_NAME](#event_name) [0..1]
* [EVENT_DESCRIPTION](#event_description) [0..1]
* [EVENT_TYPE](#event_type) [0..1]
* [EVENT_TYPE_DESCRIPTION](#event_type_description) [0..1]
* [EVENT_MAX_COUNT](#event_max_count) [0..1]
* [EVENT_MANDATORY](#event_mandatory) [0..1]
* [START_TIME](#start_time) [1]
* [END_TIME](end_time) [0..1]
* [EVENT_ATTENDED](#event_attended) [1]
* [ATTENDANCE_LATE](#attendance_late) [0..1]
* [ATTENDANCE_CATEGORY](#attendance_category) [0..1]
* [SUBMISSION_TIME](#SUBMISSION_TIME) [0..1]
* [STAFF_ID](#staff_id) [0..1]
* [MOD_INSTANCE_ID](#mod_instance_id) [0..1]
* [COURSE_INSTANCE_ID](#course_instance_id) [0..1]
* [CAPTURED_FROM](#captured_from) [0..1]


## STUDENT_ID
### Description
The institution's identifier for the student

### Valid Values
Any

### Format
String (255)

### Notes
This will match the identifiers used in the Student Record System.

## EVENT_ID
### Description
A unique identifier for that event, as known in the source system.

### Valid Values
Any

### Format
String (255)

### Notes
This is normally the attendance recording system primary key for an attendance record. It **should not** be a URI, as defined in the Statement Template, because the URI will be constructed from data components submitted.

## EVENT_NAME
### Description
A name for that event

### Valid Values
Any

### Format
String (255)

### Notes

## EVENT_DESCRIPTION
### Description
Longer description of the event, for example, 'Lecture on XXX'

### Valid Values
Any

### Format
String (255)

### Notes

## EVENT_TYPE
### Description
A code for the event type, for example, 1 = LECTURE, 2 = TUTORIAL, and so on

### Valid Values
Any

### Format
String (255)

### Notes
Only populate this if event types are distinguished in the source database; leave blank otherwise.

## EVENT_TYPE_DESCRIPTION
### Description
The name or description of the actitivity type, for example, LECTURE, TUTORIAL, and so on. This is the user-facing counterpart to EVENT_TYPE.

### Valid Values
Any

### Format
String (255)

### Notes

## EVENT_MAX_COUNT
### Description
Number of students who could attend this event

### Valid Values
Any

### Format
Integer

### Notes

## EVENT_MANDATORY
### Description
Indicates whether attendance was compulsory. May be used to decide whether or not to count in the attendance statistics.

### Valid Values
0 - NO
1 - YES

### Format
Integer

### Notes

## START_TIME
### Description
The prescribed start date and time for this activity instance (as per the timetable provision).

### Valid Values
Date and time to at least hour precision.

### Format
ISO 8601 Datetime (eg 2015-05-24T09:00Z)

### Notes
A time component must be included.

## END_TIME
### Description
The prescribed end date and time for this activity instance (as per the timetable provision).

### Valid Values
Date and time to at least hour precision.

### Format
ISO 8601 Datetime (eg 2015-05-24T09:00Z)

### Notes

## EVENT_ATTENDED
### Description
Whether the activity has been attended.

### Valid Values
0 - NO  
1 - YES

### Format
INTEGER

### Notes

## ATTENDANCE_LATE
### Description
Optional flag to confirm if this activity has been attended late or not.

### Valid Values
0 - NOT LATE  
1 - LATE (ANY)

### Notes
No value should be given when the student failed to attend.

## ATTENDANCE_CATEGORY
### Description
Attendance_category can be used to express additional detail, for example whether lateness was extreme or condoned, or to provide the source system attendance type code (as might be recorded in a conventional paper register).

### Purpose
Analytics

### Derivation
Jisc

### Valid Values
Determined by source system

### Format
String(255)

### Notes
Usually a short code such as "L", "X", "A"

## STAFF_ID
### Description
The institution's identifier for the staff

### Valid Values
Any

### Format
String (255)

### Notes
This will match the identifiers used in the Student Record System.

## MOD_INSTANCE_ID
### Description
The module instance id this activity instance belongs or refers to.

### Valid Values
Any

### Format
String (255)

### Notes
This must match a UDD MOD_INSTANCE_ID. If this identifier is not generally available, it may be appropriate to omit it and to use COURSE_INSTANCE_ID instead.

## COURSE_INSTANCE_ID
### Description
The course instance id this activity instance belongs or refers to.

### Valid Values
Any

### Format
String (255)

### Notes
This must match a UDD COURSE_INSTANCE_ID. If this identifier is not generally available, it may be appropriate to omit it. In this case, attendance will only be analysable at student level.

## SUBMISSION_TIME
### Description
The time at which the result was submitted

### Valid Values
Any

### Format
ISO 8601 Datetime (eg 2015-05-24T09:00Z)

### Notes

## CAPTURED_FROM
### Description
The application, system or device that attendance was recorded by.

### Valid Values
Any

### Format
string (255)
