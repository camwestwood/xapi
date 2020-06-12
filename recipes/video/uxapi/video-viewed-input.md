This is the input file for a video-viewed event.

Data should be supplied as a UTF-8 Tab Separated File called videoviewed.tsv.

# video-viewed

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1]
* [OBJECT\_ID](#object_id) [1]
* [OBJECT\_NAME](#object_name) [0..1]
* [MINUTES\_WATCHED](#minutes_watched) [0..1]
* [UDD\_MOD\_INST\_ID](#udd_mod_inst_id) [0..1]
* [VLE\_MOD\_ID](#vle_mod_id) [0..1]
* [HIERARCHY\_ID](#HIERARCHY_ID) [0..1]
* [HIERARCHY\_NAME](#HIERARCHY_NAME) [0..1]


## USERNAME 
### Description
The identifier for the user provided during authentication into the application.  This should align with the APPSHIB_ID captured in the UDD student entity:
[APPSHIB\_ID](https://github.com/jiscdev/analytics-udd/blob/master/udd/student.md#appshib_id)

### Valid Values
Any

### Format
String (255)

### Example
Joe.Bloggs@Jisc.ac.uk

## HOMEPAGE 
### Description
URL of the home page of the application from which the video was viewed.

### Valid Values
Any

### Format
String (255)

## TIMESTAMP
### Description

Time the video was viewed.

### Valid Values
Any

### Format
ISO 8601 timestamp

## OBJECT_ID 
### Description

A unique identifier for that video.

### Valid Values
Any

### Format
String (255)

## OBJECT_NAME 
### Description
Optional name for video being viewed.

### Format
String (255)

## MINUTES_WATCHED 
### Description
Number of minutes watches.  This is as a decimal value, including the seconds such as 14.34.

### Format
Decimal


## VLE\_MOD_ID 
### Description
An identifier for a course area in a VLE. It is used in conjunction with UDD_MOD_INST_ID to link module instances to course areas. Note that several module instances identified by their UDD_MOD_INST_ID can link to one VLE_MOD_ID in the VLE.

### Valid Values
Any

### Format
String (255)


## UDD\_MOD\_INST_ID 
### Description
An identifier for a module instance
The value should correspond to the UDD module_instance.MOD_INSTANCE_ID identifier that identifies the relevant module in UDD compliant data.

### Valid Values
Any

### Format
String (255)


## HIERARCHY_ID
### Description
An identifier for the application content structure component that the video viewed resides in.

### Valid Values
Any

### Format
String (255)

### Notes
Video content structure might align with organisation's module structure which can be captured in VLE_MOD_ID. However the application might have its own content structure or hierarchy, which can be captured here

## HIERARCHY_NAME
### Description
The name of the hierarchy component where the video resides in the application.

### Valid Values
Any

### Format
String (255)
