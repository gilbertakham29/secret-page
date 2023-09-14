<template>
    <div class="w-11/12 mx-auto">
        <div class="mb-10">
            <h2 class="md:text-4xl text-2xl font-bold mb-5">PAST / CONTINUING STAGE</h2>
            <div class="overflow-x-auto" >
                <form v-for="(table,index) in tableList" :key="index">
                    <table class="w-full text-sm text-left text-gray-500" >
                        <thead class="text-xs text-gray-700 bg-gray-50">
                            <tr>
                                <th scope="col" class="px-4 py-3">Work to be done</th>
                                <th scope="col" class="px-4 py-3">Primary Stakeholder</th>
                                <th scope="col" class="px-4 py-3">Outcome</th>
                                <th scope="col" class="px-4 py-3">Skills Required</th>
                                <th scope="col" class="px-4 py-3">Work Quality</th>
                                <th scope="col" class="px-4 py-3">Capibility</th>
                                <th scope="col" class="px-4 py-3">Interest</th>
                                <th scope="col" class="px-4 py-3">Comment</th>
                                <th scope="col" class="px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <select name="service" v-model="newService" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="Service1">Service1</option>
                                        <option value="Service2">Service2</option>
                                        <option value="Service3">Service3</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="customer" v-model="newManager" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="My Manager">My Manager</option>
                                        <option value="My Team">My Team</option>
                                        <option value="My Self">My Self</option>
                                        <option value="Leadaer">Leader</option>
                                        <option value="Executive Staff">Executive Staff</option>
                                        <option value="Functional Group">Functional Group</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="impact" v-model="newRevenue" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="Revenue Gen">Revenue Gen</option>
                                        <option value="Profitability">Profitability</option>
                                        <option value="Revenue Gen">Revenue Gen</option>
                                        <option value="Revenue Gen">Revenue Gen</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="skill" v-model="newCore" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="Core">Core</option>
                                        <option value="Skilled">Skilled</option>
                                        <option value="Expert">Expert</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="sq" v-model="newQuality" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="The service is working well">The service is working well</option>
                                        <option value="The service need improving">The service need improving</option>
                                        <option value="Environmental/Team dynamics impacting service Effectiveness">Environmenetal/Team dynamics impacting service Effectiveness</option>
                                        <option value="Improvment is in process">Improvement is in process</option>
                                        <option value="I want to lead improving this service">I want to lead improving this service</option>
                                        <option value="This service could be automated/outsourced">This service could be automated/outsourced</option>
                                        <option value="Service not needed/Not Adding value">

                                        </option>
                                    </select>
                                </td>
                                <td>
                                    <select name="mc" v-model="newCapibility" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="I am fully capable and confident">I am fully capable and confident</option>
                                        <option value="This service offers me an opportunity to grow">This service offers me an opportunity to grow</option>
                                        <option value="This is a stretch for me; need additional support">This is a stretch for me; need additional support</option>
                                        <option value="My talent is NOT aligned with this service">My talent is NOT aligned with this service</option>
                                        <option value="There is another person I know is better suited">There is another person I know is better suited</option>
                                    </select>
                                </td>
                                <td>
                                    <select name="mi" v-model="newInterest" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                        <option hidden disabled></option>
                                        <option value="Enjoy this service; would like to keep doing it">Enjoy this service; would like to keep doing it</option>
                                        <option value="Dislike this service; would prefer not to do it">Dislike this service; would prefer not to do it</option>
                                        <option value="Been there done that; I am not learning or growing">Been there done that; I am not learning or growing</option>
                                        <option value="Would like to train/Mentor others to do this service">Would like to train/Mentor others to do this service</option>
                                        <option value="Specific project that is completed/no longer needed">Specific project that is completed/no longer needed</option>
                                        <option value="Not doing this, but would llke to in the future">Not doing this, but would like to in the future</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" v-model="newComment" placeholder="comment..." class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="comment">
                                </td>
                                <td class="text-center">
                                    <div class="flex justify-center items-center">
                                        <button type="submit">
                                            <svg class="w-6 h-6 text-green-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>
                                        </button>
                                        <button type="submit">
                                            <svg class="w-6 h-6 text-red-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <form class="flex justify-center mt-5"  v-on:submit.prevent="onSubmit">
                    <button @click="createTable" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <span>{{ btnName }}</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div class="w-11/12 mx-auto">
        <div class="mb-10">
            <h2 class="md:text-4xl text-2xl font-bold mb-5">PRESENT / CONTINUING STAGE</h2>
            <div class="overflow-x-auto">
                <form></form>
                <form class="flex justify-center mt-5">
                    <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <span>Create New Table</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div class="w-11/12 mx-auto">
        <div class="mb-10">
            <h2 class="md:text-4xl text-2xl font-bold mb-5">FUTURE / CONTINUING STAGE</h2>
            <div class="overflow-x-auto">
                <form></form>
                <form class="flex justify-center mt-5">
                    <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        <span>Create New Table</span>
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div class="flex justify-center mb-2 items-center">
        <button disabled class="px-5 py-2 text-xl font-bold bg-gray-500 rounded-md">Submit</button>
    </div>
</template>

<script>
export default{
    data(){
        return{
        newTable:{},
        newService:"",
        newManager:"",
        newRevenue:"",
        newCore:"",
        newQuality:"",
        newCapibility:"",
        newInterest:"",
        newComment:"",
        tableList:[],
        tableCreated:false,
        btnName:"Create New Table"
        }
        
    },
    methods:{
        createTable(){
            this.tableCreated = true
            if(this.tableCreated){
                this.tableList.push(this.newTable)
                this.newTable = {}
                this.btnName = "Add Row"
            }
        }
    }
}
</script>

<style scoped>

</style>