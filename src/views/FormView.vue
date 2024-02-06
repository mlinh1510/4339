<template>
    <div>
      <!--Create a form to prompt input from user-->
      <form @submit.prevent="getData"> <!--button submit will bound to getData method below-->
        <div class="form-group">
        <h1>Weather Data</h1>
        <p>Please fill in the form and use submit button to load data</p>
        <br>
        <label for="location">Location</label>
        <input class="form-control rounded" type="text" v-model="formdata.location" required /> <!--v-model directive allows 2 way binding which bind the input field's value to the 'location.formdata' property-->
        </div>
        <div class="form-group">
        <label for="date">Start Date </label> <br>
        <input class="form-group rounded" type="date" v-model="formdata.startdate" required /><br>
        </div>
        <div class="form-group">
        <label for="date">End Date</label> <br>
        <input class="form-group rounded" type="date" v-model="formdata.enddate" required /><br>
        </div>
        <br>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
      </div>
  
      <br>
      
      <!--display child componet here-->
      <TableComponent :titles="titles" :myarray="myarray" /> 
    </template>
  
    <script>
    import axios from "axios";
    import TableComponent from '@/components/TableComponent.vue';
  
    export default {
      components: {
        TableComponent //define child component to render it on template
      },

      //define initial data properties for the component. It returns object with 2 properties 'formdata' and 'remotedata'
      data() {
        return {
          myarray: [], //Define some parameter here
          titles: [],

          formdata:{
            location: "", //these properties are used to store user input data 
            startdate: "",
            enddate :""
          },
          remotedata: {} //Initialize as an empty array to hold the retrieved API data
        }
      },
      
              
      //call back method to retrive data from API
      methods: {
        async getData() {
          console.log(this.formdata.location, this.formdata.startdate,this.formdata.enddate);
          //below code were copied from Weather API website
          const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/history.json',
            params: {
              q: this.formdata.location,
              dt: this.formdata.startdate,
              lang: 'en',
              end_dt: this.formdata.enddate,
            },
            headers: {
              'X-RapidAPI-Key': 'e2245b99c7mshdc8dc218aac1fb4p19a4e1jsn21a572f22532',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          };

          try {
            const response = await axios.request(options);
            this.remotedata = response.data;
            // Extract dates and temperatures from the response and store them in titles and myarray
            // These 4 lines of code was referened from ChatGPT using array.map() method to process the data received from the API response and prepare it for displaying in the table.
            //My prompt: Can you write me a script using array.map() method to loop through an array and display result accordingly and then I give ChatGPT a json data
            //Assign value to 'titles'. It is an array that will store the dates I want to display in the table's header.iterates over each item in the forecastday array and extracts the date property from each item. 
            this.titles = this.remotedata.forecast.forecastday.map((item) => item.date); 

            // iterates over each item in the forecastday array and extracts the avgtemp_f property from the day object of each item. 
            this.myarray = this.remotedata.forecast.forecastday.map((item) => item.day.avgtemp_f);
            console.log(this.titles); //This line logs the this.titles array in the browser's console. 
            console.log(this.myarray); //This line logs the this.myarray array in the browser's console. 
            
          } catch (error) {
            console.error(error.message); //catch any error and display message
          }
        }
     }
  }
  
  </script>
     