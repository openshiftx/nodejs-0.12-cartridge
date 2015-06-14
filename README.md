# nodejs-0.12-cartridge

Web cartridge for installing Node.js 0.12.
Right now, the cartridge installs **Node.js 0.12.4**.

## Creating a Node.js 0.12 application

### Using the web console

1. Open *Applications* page.
2. Click *Create your first application now* or *Add Application...*.
3. In the *Code Anything* section, use `http://cartreflect-claytondev.rhcloud.com/reflect?github=openshiftx/nodejs-0.12-cartridge`.
4. Click *Next*.
5. Set *Public URL*.
6. Click *Create Application*.

### Using rhc

To create a Node.js 0.12 application:

`rhc app create YOUR_APP http://cartreflect-claytondev.rhcloud.com/reflect?github=openshiftx/nodejs-0.12-cartridge`
