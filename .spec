"

This will be a two-week project. Spend today building a tap room in React where a bar or kombucha store can track their kegs. Today's focus includes creating a component tree and documenting your work. Here are some possible user stories to get you started. This prompt is flexible and the functionality you include is ultimately up to you.

As a patron, I want to see a list/menu of all available kegs. For each keg, I need to see its name, brand, price and alcoholContent (or perhaps something like flavor for a kombucha store).
As an employee, I want to fill out a form when I tap a new keg to add it to the list. (Don't worry about authenticating employee user accounts yet.)
As an employee, I want the option to edit a keg's properties after entering them just in case I make a mistake.
As a patron and/or employee, I want to see how many pints are left in a keg. (Hint: A full keg has roughly 124 pints).
As an employee, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1.
As an employee, I want to be able to see kegs with less than 10 pints left so I can be ready to change them.
As a patron, I want to have kegs prices to be color-coded for easy readability. Perhaps based on their price (greater or less than $5 per pint, perhaps) or the particular style of beer or kombucha.
As a patron, I want to use the alcohol content property to display stronger beers differently than weaker beers.

1. Component Structure
Before coding, spend time planning and drawing out your React app's component structure. Include this image in your README. For example, here's a component tree drawing that will appear in next week's lessons:

This component tree drawing may be in any format. You could draw it on paper or a whiteboard and snap a picture, use a free tool like draw.io, or any other method as long as it's legible.

Hint: Revisit the Thinking in React article for a refresher on breaking an app into a component hierarchy.

2. React Application
After carefully planning your component structure, begin creating your React app. A few notes:

We won't learn how to work with dynamic, user-created information in React until next week. For now, just hard-code data directly into your JSX.

Recreating your component structure and styling this application will be time consuming. If you aren't able to fully complete the application today, make sure your commit history depicts a full day's work.

You will also work with this same project next week. Your progress will be checked after this submission using objectives below, then graded more carefully after it's completed next Friday.

Objectives
This week's progress will be checked using the following objectives:

Development environment is fully-functional, including Babel transpiling, Webpack module bundling, a development server with hot module replacement, and linting.
Application successfully uses client-side routing via the React-Router library to create appearance of multiple pages.
Styles are successfully added using CSS objects, CSS modules, or both.
README includes an accurate representation of the application's component tree.
Commit history clearly depicts eight solid hours of work.
Project was submitted by the Friday deadline.
Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using the correct terminology.
Next Week's Objectives
Next week, after completing this project, you'll be graded on the following objectives:

State is effectively used and is lifted in an efficient manner that follows best practices.
Documentation accurately represents current component/state structure of application.
Application is in a polished, portfolio-quality state.
Project was submitted by the Friday deadline.
Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using the correct terminology.

"