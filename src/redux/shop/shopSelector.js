import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectShopData = createSelector([selectShop], (shop) => shop.shopData)

export const selectShopDataForPreview = createSelector([selectShopData], (shopData) => {
  return shopData ? Object.keys(shopData).map((key) => shopData[key]) : []
})

export const selectCollection = createSelector(
  [selectShopData, (state, targetCollection) => targetCollection],
  (collections, targetCollection) => {
    return collections[targetCollection]
  }
)
export const selectIsShopFetching = createSelector([selectShop], (shopData) => shopData.isFetching)

export const selectIsShopLoaded = createSelector([selectShop], (shopData) => !!shopData.shopData)