# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Welcome to React and Charts

This hw3 uses react router to fetch data from a custom API and
displays the data using charts - **Use the navigational bar to navigate to a page**

### /Home

Thank you for being here. This is a welcome/landing page that will
give a general description of each of the pages you can navigate to.
There are many components that make this a simple yet exciting
homework. It was satisfying seeing everything put together.

### /List

The countries in South America are displayed as a card list like
structure. It contains information about each country prioritizing the
flags as the top for aesthetics. The keys are highlighted whereas the
values are present if available. Missing values are represented as
'N/A' along with a simple loading and error page, which is used for
all pages.

### /Population

A bar graph that shows the population for each country in South
America. I was unable to scale up the countries with low populations,
even after testing the y/x axis scale. There are some cool components
that you can add to make charts looks stylish. Tried adapting the
styling to fit the general theme.

### /GDP

I decided to do a pie graph that shows the GDP for each country.
Again, I was not able to scale the country with small a small GDP. The
colors are randomly generated to save time.

### Stack

- Tailwind CSS
- Javascript
  - React
