# rupifi task1

-   This app has been developed using NextJS. URL: https://nextjs.org/
-   One of the great boilerplate and netflix and other famouse brands are using it.
-   App is SSR enabled. SEO's top priority so google can index are pages
-   APP is using React, Redux, Redux Saga, Statemanagment using Redux, Persist data
-   App routes
    > / (Home Page)
          - showing the list of customers
          - layout is responsive and used latest tech (CSS3)
    > /cutomer/[id]
          - customer name and address details
          - Address is an object, formated the object so itration can happen using latest techs / ES6/7/8/9 features
          - Direct accessing page is also working, smartly implemented the logic.
            a/ If user visit the detail page from home page. No addtional call for customer details
            b/ If user directly visiting, fetching customer details data only instead of all the customers list.
-   app's dev mode is enabled by HMR. Quick updates without page refresh.
-   Optimized bundle
-   App support preloading / pre-fetching features for great performance
- Many more features has been added for great experiece 

NOTE: -

Immprovments 
- Actions / Redcuers / Saga further decouled as per modules / pages / features, so we have a good moduler approach 
- Actions types and actions created can be seperated
- API's seperate setup for get/post - It will help devs to use common utilities from single module 
- Config setup would be great for APIs end-points / some secrets keys and other config related data 
- Dymanic loading / bundle split can be addressed for larger application 