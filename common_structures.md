# Jisc Learning Analytics Common Structures
The following sections describe common patterns used across several of the recipes.
Wherever a recipe refers to a "common entity identifier", the example given in the recipe follows one of the patterns given on this page.

## Actor.A
Common entity identifier:  Actor.A

This entity is required across all recipes in the Jisc profile.

#### Entity Example:
The actor entity describes the individual that is the subject of the statement.

<table>
	<tr><th>Property</th><th>Description</th></tr>
	<tr>
		<td>actor.objectType</td>
		<td>Must have the value "Agent". Actors of type "Group" are not supported in the Jisc profile.</td>
	</tr>
	<tr>
		<td>actor.name</td>
		<td>Full name of user, optional.</td>
	</tr>
	<tr>
		<td>actor.account</td>
		<td>JSON Object with account.name giving the login id for the subject of the statement and account.homepage giving the URL of the home page of the application for which the login id applies. Both are required.</td>
	</tr>
</table>

``` Javascript
{
    "actor": {
        "objectType": "Agent",
        "name": "John Smith",
        "account": {
            "name": "jsmith12",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```
