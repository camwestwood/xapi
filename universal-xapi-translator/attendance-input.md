This is the input file for an attendance event.

Data should be supplied as a UTF-8 Tab Seperated File called attendance.tsv

# attendance
* [EVENT_ID](#event_id) [1]
* [EVENT_NAME](#event_name) [1]
* [EVENT_DESCRIPTION](#event_description) [1]
* [STUDENT_ID](#student_id) [1]
* [STAFF_ID](#staff_id) [0..1]
* [EVENT_TYPE_ID](#event_type_id) [1]
* [EVENT_TYPE_DESCRIPTION](#event_type_description) [0..1]

* [EVENT_MAX_COUNT](#event_max_count) [0..1]
* [MOD_INSTANCE_ID](#mod_instance_id) [1]
* [START_TIME](#start_time) [1]
* [END_TIME](end_time) [0..1]
* [EVENT_MANDATORY](#event_mandatory) [0..1]
* [EVENT_ATTENDED](#event_attended) [1]
* [ATTENDANCE_LATE](#attendance_late) [0..1]
* [ATTENDANCE_CATEGORY](#attendance_category) [0..1]
* [TIMESTAMP](#timestamp) [1]
* [EVENT_LOGGED_END](#event_logged_end) [0..1]

## EVENT_ID 
### Description

A unique identifier for that event

### Purpose

Analytics - to allow groups of all attendees at an event.

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

### Notes

## EVENT_NAME 
### Description

A name name for that event

### Purpose

For display purposes

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

### Notes

## EVENT_DESCRIPTION
### Description

Longer desciption of the event 'eg Lecture on XXX'

### Purpose
Display

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

### Notes


## STUDENT_ID 
### Description

The institutions identifier for the student

### Purpose

To link the student to the UDD

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

### Notes

## STAFF_ID 
### Description

The institutions identifier for the staff

### Purpose

To link the staff to the UDD

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

### Notes

## EVENT_TYPE_ID 
### Description

The institution's unique ID number for the activity type eg. 1 = LECTURE, 2 = TUTORIAL etc

### Purpose

Analytics

### Derivation
Insitution

### Valid Values
Any

### Format
String (255)

### Notes

## EVENT_TYPE_DESCRIPTION
### Description

The name/ description of the actitivity type eg. LECTURE, TUTORIAL etc.

### Purpose

Display

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

### Notes


## EVENT_MAX_COUNT
### Description

Number of students who could attend this event

### Purpose

Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
Integer

### Notes

## MOD_INSTANCE_ID
### Description

The module instance id this activity instance belongs/ refers to

### Purpose

To link the event to the module on the UDD

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

### Notes

## EVENT_START 
### Description

The prescribed start date and time for this activity instance (as per the timetable provision)

### Purpose

To link the student to the UDD

### Derivation
Jisc

### Valid Values
Any

### Format
ISO Date (eg 2015-05-24T09:00:00)

### Notes

## EVENT_END 
### Description

The prescribed end date and time for this activity instance (as per the timetable provision)

### Purpose

To link the student to the UDD

### Derivation
Jisc

### Valid Values
ISO Date (eg 2015-05-24T09:00:00)

### Format
ISO Date (eg 2015-05-24T09:00:00)

### Notes

## EVENT_MANDATORY 
### Description

Should this be counted in the attendance monitoring (mandatory or not attendance)

### Purpose

Analytics

### Derivation
Jisc

### Valid Values
Any

### Format
String (255)

### Notes

## EVENT_ATTENDED
### Description

The institutions identifier for the student

### Purpose

Confirmation if this activity attendance has been attended, or not

### Derivation
Jisc

### Valid Values
1   YES
2   NO
3   UNKNOWN

### Format
INTEGER

### Notes

## ATTENDANCE_LATE 
### Description

Optional flat to confirm if this activity has been attended late or not

### Purpose

Analytics

### Derivation
Jisc

### Valid Values
0 - NOT LATE
1 - LATE (ANY)

## ATTENDANCE_CATEGORY
### Description

Attendance_category can be used to express additional detail, for example whether lateness was extreme or condoned, or to provide the source system attendance type code (as might be recorded in a conventional paper register).

### Purpose

Analytics

### Derivation
Jisc

### Valid Values
0 - NOT LATE
1 - LATE (ANY)

### Format
INTEGER

### Notes

## TIMESTAMP 
### Description

Time attendance was captured.

### Purpose

ANALYTICS

### Derivation
Jisc

### Valid Values
Any

### Format
ISO Date (eg 2015-05-24T09:00:00)

### Notes

## EVENT_LOGGED_END 
### Description

Optional end date and time for when the attendance was confirmed (captured)

### Purpose

To link the student to the UDD

### Derivation
Jisc

### Valid Values
Any

### Format
ISO Date (eg 2015-05-24T09:00:00)

### Notes


















