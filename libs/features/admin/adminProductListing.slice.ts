import { IAdminProductListingInitialState, IProductCategory, TPaginationLimit, TSortPrice } from "@modals/admin";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IAdminProductListingInitialState = {
    searchQuery: null,
    isSearcheResultsLoading: false,
    searchResults: [],
    isSearchError: false,
    isEditAllOpen: false,
    categoryFilter: null,
    colorFilters: null,
    sortByPrice: null,
    selectedProductIds: [],
    products: [],
    limit: 10,
    page: 1,
    categoryList: []
};

const adminAuthSlice = createSlice({
  name: "adminProductListing",
  initialState: initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setIsSearcheResultsLoading(state, action: PayloadAction<boolean>) {
      state.isSearcheResultsLoading = action.payload;
    },
    setSearchResults(state, action: PayloadAction<any[]>) {
      state.searchResults = action.payload;
    },
    setIsSearchError(state, action: PayloadAction<boolean>) {
      state.isSearchError = action.payload;
    },
    setIsEditAllOpen(state, action: PayloadAction<boolean>) {
      state.isEditAllOpen = action.payload;
    },
    setCategoryFilters(state, action: PayloadAction<string | null>) {
      state.categoryFilter = action.payload;
    },
    setColorFilters(state, action: PayloadAction<string | null>) {
      state.colorFilters = action.payload;
    },
    setSortByPrice(state, action: PayloadAction<TSortPrice>) {
      state.sortByPrice = action.payload;
    },
    setSelectedProductIds(state, action: PayloadAction<string[]>) {
      state.selectedProductIds = action.payload;
    },
    setProducts(state, action: PayloadAction<any[]>) {
      state.products = action.payload;
    },
    setLimit(state, action: PayloadAction<TPaginationLimit>) {
      state.limit = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setAdminCategoryList(state, action: PayloadAction<IProductCategory[]>) {
      state.categoryList = [...state.categoryList, ...action.payload];
    }
  },
});

export const { setColorFilters, setIsEditAllOpen, setIsSearchError, setIsSearcheResultsLoading, setCategoryFilters, setProducts, setSearchQuery, setSearchResults, setSelectedProductIds, setSortByPrice, setLimit, setPage, setAdminCategoryList } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
