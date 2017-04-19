# Statement Template Changes


##  VLE Recipes


### Logged in

2-05-2016, Documentation change [subType supersedes ApplicationType](https://github.com/jiscdev/xapi/issues/55) in objectA

### Logged out

20-03-2017, Spec change. [Description no longer required in ObjectA.](https://github.com/jiscdev/xapi/issues/148)

2-05-2016, Documentation change [subType supersedes ApplicationType](https://github.com/jiscdev/xapi/issues/55) in objectA


### VLE resource viewed


11-04-2017, Documentation change [added subtype example to documentation]

20-03-2017, Spec change. [Description no longer required in ObjectA.](https://github.com/jiscdev/xapi/issues/148)

2-05-2016, Documentation change [subType supersedes ApplicationType](https://github.com/jiscdev/xapi/issues/55)



### Session timeout

20-03-2017, Spec Change. [Description no longer required in ObjectA.](https://github.com/jiscdev/xapi/issues/148)

2-05-2016, Documentation change [subType supersedes ApplicationType](https://github.com/jiscdev/xapi/issues/55)


#### Assignment Graded

20-04-2017, Documentation Change. SubType example in context.contextActivities (which is an object that fits objectA statement).

11-04-2017, Documentation Change. [Description no longer required in ObjectA or B.](https://github.com/jiscdev/xapi/issues/148)

20-03-2017, Spec change. [Description no longer required in ObjectA or B.](https://github.com/jiscdev/xapi/issues/148)


#### Assignment Submitted

20-04-2017, Documentation change. SubType example in context.contextActivities (which is an object that fits objectA statement).

11-04-2017, Documentation change. [Description no longer required in ObjectA.](https://github.com/jiscdev/xapi/issues/148)

20-03-2017, Spec change. [Description no longer required in ObjectA.](https://github.com/jiscdev/xapi/issues/148). Removed from ObjectA in Context.


### Attendance Recipes

#### Attended learning activity

10-04-2017

Spec change [Most context.extensions moved to object.extensions](https://github.com/jiscdev/xapi/issues/151)

Spec change [event_late and activity_category renamed to activity_late and attendance_category](https://github.com/jiscdev/xapi/issues/151)

Spec change [object.definition.type changed from event to event_timetabled](https://github.com/jiscdev/xapi/issues/151)

Spec change [context.extensions.http://xapi.jisc.ac.uk/activity_max_count and context.extensions.http://xapi.jisc.ac.uk/activity_mandatory changed to event_max_count and activity_mandatory](https://github.com/jiscdev/xapi/issues/151)





17-02-2017

Spec change [added http://xapi.jisc.ac.uk/attendance_category to results.extension](https://github.com/jiscdev/xapi/issues/142)

Spec change [http://xapi.jisc.ac.uk/activity_type_description added](https://github.com/jiscdev/xapi/issues/142)


08-02-2017

Spec change [Attendance - change context to match VLE](https://github.com/jiscdev/xapi/issues/139)

Spec change [vle_mod_id and uddModInstanceID used in attendance](https://github.com/jiscdev/xapi/issues/140\)

Spec change [context.instructor.name removed atttendance](https://github.com/jiscdev/xapi/issues/141)

Spec change [added http://xapi.jisc.ac.uk/activity_type_id, http://xapi.jisc.ac.uk/activity_max_count and activity_mandatory to content extensions](https://github.com/jiscdev/xapi/issues/142)

Spec change [added http://xapi.jisc.ac.uk/activity_late to result.extensions](https://github.com/jiscdev/xapi/issues/142)

Documentation change [starttime and end time replace duartion](https://github.com/jiscdev/xapi/issues/143)



### Student Recipes


# Vocabulary Changes

Tracking identifier mappings between changes

## v0.2

| V0.1  		| v0.2                    		 | 
| ------------- | -------------------------------|
| http://xapi.jisc.ac.uk/define/extensions/vle/content  | http://xapi.jisc.ac.uk/vle/content
| http://xapi.jisc.ac.uk/define/extensions/vle/page     | http://xapi.jisc.ac.uk/vle/page  
| http://xapi.jisc.ac.uk/define/extensions/vle/quiz     | http://xapi.jisc.ac.uk/vle/quiz  
| http://xapi.jisc.ac.uk/define/extensions/vle/forum    | http://xapi.jisc.ac.uk/vle/forum  
| http://xapi.jisc.ac.uk/define/extensions/externalURL  | http://xapi.jisc.ac.uk/externalURL
| http://xapi.jisc.ac.uk/extensions/courseArea | http://xapi.jisc.ac.uk/courseArea	
| http://xapi.jisc.ac.uk/extensions/sessionId  | http://xapi.jisc.ac.uk/sessionId 
| http://xapi.jisc.ac.uk/extensions/recipeVersion | http://xapi.jisc.ac.uk/recipeVersion
| http://xapi.jisc.ac.uk/extensions/applicationType | http://xapi.jisc.ac.uk/applicationType
| http://xapi.jisc.ac.uk/extensions/duedate  | http://xapi.jisc.ac.uk/dueDate
| http://xapi.jisc.ac.uk/define/vle   		 | http://id.tincanapi.com/activitytype/lms        
| http://www.tincanapi.co.uk/verbs/evaluated | http://adlnet.gov/expapi/verbs/scored 
