# xAPI recipes for the Jisc Learning Analytics Project v0.6

## Repository Workflow
The simplest way of contributing xAPI recipes works as follows:

1. add an issue to the issue tracker to alert everyone to what you are working on and why
2. tag the issue with the version milestone you'd like the patch to be a part of
3. make an edit or add a file in this repository, and save it to your own branch. If you prefer, you can fork the whole repository and work in your own repository
4. send a pull request once you're done
5. the pull request will be discussed at our weekly meeting and either merged, or kept in the queue, depending on whether more work is required

You can do all this through the Github GUI, but you're welcome to use any other git tool you prefer.

If the need arises, particular versions will get their own branches, but until that time, everything is merged into the main branch. Releases will be made after the group has come to an agreement.

## Vocabulary and Common Structures

* [Vocabulary](vocabulary.md) gives the IRIs and definitions for verbs, activity types, etc, as well as for extensions used in the recipes.
* [Common Structures](common_structures.md) outlines common patterns used across different recipes.

# Statement Recipes
As far as possible all entities are the same across recipes and are identified by a version.

## VLE Statements

These are the currently platform independent documented recipes:

<table>
<tr><td>Statement Recipe</td><td>Example Statements</td><td>Statement Generation Notes</td><td>Groupings</td></tr>
<tr><td> <a href = "recipes/login.md">Logged in</a></td><td> <a href = "vle/moodle/login.js">Logged in Moodle </a> <br/><a href = "vle/blackboard/loggedin.json"> Logged In Blackboard   </a>   </td><td>VLE Plugin                </td><td>           </td></tr>                                                           
<tr><td> <a href = "recipes/logout.md>Logged out">Logged out</a></td><td> <a href = "vle/moodle/logout.js">Logged out Moodle </a>  <br/> <a href = "vle/blackboard/loggedout.json"> Logged out Blackboard   </a>    </td><td>VLE Plugin                </td><td>           </td></tr>    
<tr><td> <a href = "recipes/Module-View.md">VLE resource viewed   </a></td><td><a href = "vle/moodle/moduleview.js">Moodle module viewed </a> <br/> <a href = "vle/blackboard/course_access.json"> Blackboard course acccess  </a> <br/> <a href="vle/blackboard/course_content_access.json">Blackboard content accessed</a>     </td><td>VLE Plugin                </td><td>           </td></tr>    
<tr><td> <a href = "recipes/Session-timeout.md">Session timeout   </a></td><td><a href = "vle/blackboard/session_timeout.json">Blackboard session timeout </a>    </td><td>VLE Plugin                </td><td>           </td></tr>    
<tr><td><a href =  "recipes/assignment-graded.md">Assignment Graded   </a></td><td> <a href = "vle/moodle/asssignment_graded.json">Assignment graded in Moodle</a><br/> <a href="vle/blackboard/asssignment_graded.json">Assignment graded in Blackboard </a>   </td><td>VLE Plugin                </td><td>           </td></tr>    
<tr><td><a href =  "recipes/assignment-submitted.md">Assignment Submitted  </a></td><td><a href = "vle/moodle/assignment_submitted.json">Assignment submitted in Moodle</a><br/> <a href="vle/blackboard/assignment_submitted.json">Assignment submitted in Blackboard</a>   </td><td>VLE Plugin                </td><td>           </td></tr>    
</table>

### All VLE statement examples
* [Blackboard VLE samples] (vle/blackboard/Examples.md)
* [Moodle VLE samples] (vle/moodle/examples.md)

## Intervention Statements
An intervention statement describes a learning activity that taken place as part of an intervention. Two examples are given, with the student actor as different entities.

<table>
<tr><td>Statement Recipe</td><td>Example Statements</td><td>Statement Generation Notes</td><td>Groupings</td></tr>
<tr><td> <a href = "recipes/intervention/intervention.md">Intervention Example 1. Student is object.</a></td><td> <a href = "recipes/intervention/intervention.md#Statement">Logged in Moodle </a> <br/><a href = "vle/blackboard/loggedin.json"> Logged In Blackboard   </a>   </td><td>TSV Upload                </td><td>           </td></tr>                                                           
<tr><td> <a href = "recipes/intervention/intervention_student.md>Intervention Example 2. Student is actor./a></td><td> <a href = "recipes/intervention/intervention_student.md#Statement">Logged out Moodle </a>  <br/> <a href = "vle/blackboard/loggedout.json"> Logged out Blackboard   </a>    </td><td>TSV Upload                </td><td>           </td></tr>    
</table>

### Draft Candidates to be removed
* [Intervention recipe A](recipes/intervention/intervention_candidate_a.md)
* [Intervention recipe B](recipes/intervention/intervention_candidate_b.md)
* [Intervention recipe C](recipes/intervention/intervention_candidate_c.md)

<table>
<tr><td>Statement Recipe</td><td>Example Statements</td><td>Statement Generation Notes</td><td>Groupings</td></tr>
<tr><td> <a href = "recipes/intervention/intervention.md">Intervention Example 1. Student is object.</a></td><td> <a href = "recipes/intervention/intervention.md#Statement">Intervention </a>   </td><td>TSV Upload                </td><td>           </td></tr>                                                           
<tr><td> <a href = "recipes/intervention/intervention_student.md>Intervention Example 2. Student is actor./a></td><td> <a href = "recipes/intervention/intervention_student.md#Statement">Intervention ### </a>    </td><td>TSV Upload                </td><td>           </td></tr>    
</table>

## Presense and Attendence
<table>
<tr><td>Statement Recipe</td><td>Example Statements</td><td>Statement Generation Notes</td><td>Groupings</td></tr>
<tr><td> <a href = "recipes/attendance.md">Attended learning activity </td>  </a></th><td>  </td><td>TSV Upload                </td><td>           </td></tr>    
<tr><td> <a href = "recipes/physical_presence/physical_presence.md">At physical location</a> </td>  </a></td><td><a href = "recipes/physical_presence/physical_presence.md#Example">At physical location</a> </td>  </td><td>TSV Upload                </td><td>           </td></tr>    
<tr><td> <a href = "recipes/physical_presence/physical_presence_leaving.md">Left physical location</a></td> <a href = "recipes/physical_presence/physical_presence.md#Example">At physical location </td> </a></td><td>  </td><td>TSV Upload                </td><td>           </td></tr>    


## Predictive Model Output
* [Alerting JSON] (/lap/apereo/model_output.js)
* [Alerting] (/lap/apereo/model_output.md)

## Statements In Draft
* [Library examples](https://github.com/jiscdev/xapi/tree/ds10-recipedev)(In development branch)

