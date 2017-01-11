#intervention Recipe
Revision: 0.1 

## Purpose
This recipe records an intervention taking place.

## Draft Notes
The following previous candidates can be found:

[Candidate A](intervention_candidate_a.md)

[Candidate B](intervention_candidate_b.md)

[Candidate C](intervention_candidate_c.md)

Notes from the development chat can be found on [issue 130](https://github.com/jiscdev/xapi/issues/130). In this draft the following approach has been taken:

- The actor can be the alerting system/tutor. The [sister recipe](intervention_student) describes a recipe where student is the actor.
- Specific verbs are used in the verb entity to describe the intervention
- System information is added to the recipe. This helps the ' splitting of data pertaining to activity' 
- context.contextActivities 'tags' this as an intervention recipe
- ticket numbers are stored in the context
- The lost of verbs needs expanding by the community
- This example shows a tutor inteviewing a student. SID is suppied as the system but I do not know if that is realistic. Would SID record this has happened?

### Actor

The actor is an instructor or service creating the intervention. If the recipe needs a student performing an activity as part of an intervention then see [Intervention student activity](intervention_student)
 
#### Entity Example:

In this example it is the instructor that sends the intervention.

``` Javascript
"actor": {
	"objectType": "Agent",
      "name": "Ray Keenan",
      "account": {
         "name": "rkeenan12",
         "homePage": "http://localhost/moodle"
      }
	}
```


### Verb

The verb, depends on the intervention taking place. A list of verbs describing interventions can be found at the bottom of this recipe page (to be moved to vocab after draft). In this example the tutor interviewed the student. 

``` javascript
"verb": {
        "id": "http://id.tincanapi.com/verb/interviewed",
        "display": {
            "en": "Interviewed"
        }
    },
```

 

### Object

Object is the person that the intervention is acted upon. It is usually the student.

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

Common entity identifier: Context*

#### Entity Example:

context includes the version number of this recipe. 
context.contextActivies is of type category is tells us that this statement is related to intervention activities. (required if intervention)
context.platform is set to the platform tracking this activity. (optional)
context.extensions.interventionId is any id or ticket number used by the system to identify the intervention this was a part of (optional)

``` javascript
"context": {
	"contextActivities":{
		"category": [{
			"objectType": "Activity",
			"id": "http://xapi.jisc.ac.uk/activities/intervention"
		}],
	},
	
    "platform": "Student Information Desk", 
	"extensions": {
		"http://xapi.jisc.ac.uk/recipeVersion" : "intervention.1",
		"http://xapi.jisc.ac.uk/interventionId":"38223",
		}
```

## Intervention Verbs

### Interviewed
<table>
<tr><th align="left">Verb</th><td>Interviewed</td></tr>
<tr><th align="left">Description</th><td>For use when one agent or group interviews another agent or group. It could be used for the purposes of hiring, creating news articles, shows, research, etc.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/verb/interviewed">http://id.tincanapi.com/verb/interviewed</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/intervention.md#verb">Intervention</a> </td></tr>
</table>

