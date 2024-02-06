<!--Some lines of code in this page was referenced from code from tutorial-->

<template>
    <div v-if = "titles"> <!--Display 'titles' if it's not empty or null-->
        <hr>
        <h5>Weather Data in a Table</h5>
        <table class ="table">
            <thead> <!--Table head-->
                <tr>
                    <th v-for="dates in titles"> {{ dates }}</th> <!--the content of each item is corresponding in the 'titles' array-->
                </tr>
            </thead>
            <tbody> <!--Table body-->
                <tr>
                    <td v-for="temperature in myarray"> {{ temperature }}</td> <!--loop that iterates over the 'myarray' array-->
                </tr>
            </tbody>
        </table>
      </div>
    </template>

    
    <script>
    export default {
        
        //transfer data to template using props declaration
        props: {
            titles: {
                type: Array,
            },
            myarray: {
                type: Array,
            }
        }
    }
    </script>