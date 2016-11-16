#intervention Recipe
Revision: 0.1 

## Purpose
This recipe records an intervention taking place, it is a record of an act by a person with an intention to help. 

## Draft Notes
In this draft the actor is an instructor or service making the intervention, the object is the person the intervention is sent to, and the context describes the intervention activity. 

## Definition
### Actor
 
The actor is usually the instructor that sends the intervention.

``` Javascript
"actor": {
	"objectType": "Agent",
      "name": "instructor",
      "account": {
         "name": "2",
         "homePage": "http://localhost/moodle"
      }
	}
```


### Verb

The verb, depends on the intervention taking place. A list of verbs describing interventions can be found in the vocabulary page(/vocabulary.md#Intervention_verbs). In this example the tutor interviewed the student. 

``` javascript
"verb": {
        "id": "http://id.tincanapi.com/verb/interviewed",
        "display": {
            "en": "Interviewed"
        }
    },
```


### Object

In this case, object is the person that the intervention is acted upon. It is usually the student.

``` Javascript
{
    "object": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "2",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```

### Context

TODO: The context may describe:

The item in the academic management system?
item in tutoring system?
Mod id?

``` javascript
"context": {
	"contextActivities":{
            "grouping":[
                {
                    "objectType":"Activity",
                    "id":"", // ?
                    "definition":{
                        "type":"http://xapi.jisc.ac.uk/intervention",
                        "description":{
                            "en":" //?
                        }
                    }
                }
            ]
        }
```


