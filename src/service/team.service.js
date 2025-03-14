
const API_URL = "https://655c2c57ab37729791a9f8b0.mockapi.io/api/teams"
export const getAllTeamService = async () => {
    try{

        const response =  await fetch(API_URL)
        const data = await response.json()
        return data
    }
    catch(error){
        console.error(error)
        
    }

}