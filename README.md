To set up new project:

On local:
* Git clone this repo into a new folder
* Change the origin url to a new repo using `git set-url origin [new remote]`
* Change Netlify CMS backend repo in static/admin/config.yml (Commit and push the change)
* Install packages in new project root folder using `npm install`

On Netlify:
* Set up the new project on with build command `gatsby build`
* Enable Identity
* Enable Git Gateway

Make sure the back-end is connected appropriately by making a change in the back-end (localhost:8000/admin while `gatsby develop` is running), and checking that it pushes to the correct repo.

Once set up, dev by running `gatsby develop` from project root folder
