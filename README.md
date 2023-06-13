# Starter kit with sveltekit

This template can be used to create a project with svelte and sveltekit.
The template offers:

- ### Integration with google identity service
  - Please ensure you have a valid google api CLIENT ID needed for google identity service. Details to generate client ID can be found here: https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid
    A video tutorial to generate google api client id: https://www.youtube.com/watch?v=roxC8SMs7HU
  - Add this id in your environment file.
    ```bash
    CLIENT_ID='Client Id goes here'
    ```
  - **For Running this app in development environmnet, create a .env file in the root directory and paste the client id**
    .env
    ```bash
    CLIENT_ID='Client Id goes here'
    ```
- ### Integration with postgresSql

  - This template use node-postgres package as Non-blocking PostgreSQL client for Node.js. - https://www.npmjs.com/package/pg
  - Add these to your environment file
    ```bash
    DB_HOST: Hostname for your postgres DB
    DB_PORT: port
    DB_USER: Data base User name to be used to connect
    DB_PASSWORD: Database Password
    DB_NAME: Database name
    ```
  - You can have a postgresSQl DB setup in your local and replace the above env variables with corresponding values.
  - **Example:** Inorder to be able to run the **sample** APIs and **sample** Server Side rendering with this template, create a **table** with name **person** in your postgres DB. The table person should have following fields - **id**, **name**.

    |     | id  | name |
    | --- | --- | ---- |
    |     | 1   | Jack |
    |     | 2   | John |

- ### Custom components like
  - Table - offers features like
    - Pagination
    - Custom styling of cells
    - Download CSV
  - Sidebar - offers features like
    - Nested view
    - Icon with links
  - Header
  - Simple Layout
- ### Scalable view for Large screens.
  - On large screens, the look and feel will be same. Please ensure all the css properties are written in 'rem' unit.

## Elementary UI Components

For elementary UI components like **button, input,** this template uses Daisy Ui: https://daisyui.com/docs/install/

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash

npm run  dev



# or start the server and open the app in a new browser tab

npm run  dev  --  --open

```

## Building

To create a production version of your app:

```bash

npm run  build

```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
