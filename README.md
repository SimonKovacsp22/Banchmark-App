# Designing our application
### Main HTML elements
-
-
-
-
### Main CSS styles
-
-
-
-
-
### Main JS functionalities
-load page 
(1) Show HTML and CSS of first page

- click on PROCEED button 
(1) Hide text in <div> id="welcome-page-text" <div> with checkbox and PROCEED button
(2) Proceed to first question (only if the check box is marked 'checked')
(3) Show Question <div>, Show buttons with answers <div>, timer(start countdown), footer with question counter

- select answer by clicking on one of buttons
(1) Selected button changes color
(2) Submit button appears
(3) By selecting different button -> deselect the initially selected one, submit button stays selected
(4) *If time runs out* proceed to next question as if submit was clicked

- submit button onclick -> proceed to next question *new question <div>, new buttons <div>*
(1) Evaluate based on selected answer -> *if correct ans selected* cAC +=1 otherwise iAC +=1
(2) Reset Timer
(3) Increase question count in the bottom
- repeat until last question

- submit button onclick  
 (1) *If this is a last question* everything except epicode logo goes hidden
 (2) Dislplay results div with picture and text + title
 (3) Display percentages of cAC/10 and iAC/10
 (4) Display RATE US button

 - rate button onclick 
 (1) Everything except epicode logo goes hidden
 (2) Show title,text, 10 stars, text box and MORE INFO button

 -star onclick
 (1) change bg-color on all previous stars to the left the clicked star included