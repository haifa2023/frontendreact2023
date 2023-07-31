import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {fetchSCategories} from
"../services/ScategorieService"

export const getScategories = createAsyncThunk(
    "scategorie/getScategories",
    async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
    const res = await fetchSCategories();
    
  
    
    return res.data; //this is payload
    }
    catch (error) {
    return rejectWithValue(error.message);
    }
    }
    );
    export const scategoriesSlice = createSlice({
        name: 'scategorie',
        initialState:{
        scategories:[],
        scategorie:{},
        isLoading: false,
        success:null,
        error:null,
        },
        extraReducers: (builder) => {
            //get articles
            builder
            .addCase(getScategories.pending, (state, action) => {
            state.isLoading=true;
            state.error=null;
            })
            .addCase(getScategories.fulfilled, (state, action) => {
            state.isLoading=false;
            state.error = null;
            state.scategories=action.payload;
            })
            .addCase(getScategories.rejected, (state, action) => {
            state.isLoading=false;
            state.error=action.payload;
            console.log("impossible de se connecter au serveur")
            })
    }
})
    
    export default scategoriesSlice.reducer;