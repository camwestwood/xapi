This is the input file for a library-borrowed event.

Data should be supplied as a UTF-8 Tab Separated File called borrowing.tsv

# library-borrowed

* [USERNAME](#USERNAME) [1]
* [ITEM_ID](#item_id) [0..1]
* [HOMEPAGE](#item_id) [1]
* [ITEM_NAME](#item_name) [0..1]
* [ITEM_SUBTYPE](#item_subtype) [1]
* [OCLC_NUMBER](#oclc_number) [0..1]
* [SUBJECT_AREA](#subject_area) [0..1]
* [BORROWING_SITE](#borrowing_site) [0..1]
* [TIMESTAMP](#timestamp) [1]



## USERNAME 
### Description

A unique identifier for that user

## HOMEPAGE 
### Description

The canonical home page for the system the account is on.


### Valid Values
Any

### Format
String (255)

## ITEM_ID 
### Description

A unique identifier for that item

### Valid Values
Any

### Format
String (255)


## ITEM_NAME
### Description

A name identifier for that item

### Format
String (255)

## ITEM_SUBTYPE
### Description

The type of item being borrowed

### Valid Values
Any

### Format
String (255)


## OCLC_NUMBER
### Description

OLCL Number. See the [the OCLC help site for more information](https://help.oclc.org/Metadata_Services/WorldShare_Collection_Manager/Choose_your_Collection_Manager_workflow/Data_sync_collections/Prepare_your_data/035_field_and_OCLC_control_numbers)


### Valid Values
Any

### Format
String (255)


## TIMESTAMP 
### Description
The time at which the library item was borrowed

### Valid Values
Any

### Format
ISO 8601 date time

## BORROWING_SITE 
### Description
The site that the item was borrowed from.

### Valid Values
Any

### Format
String (255)

## SUBJECT_AREA 
### Description
The subject area of the item.

### Valid Values
Any

### Format
String (255)











