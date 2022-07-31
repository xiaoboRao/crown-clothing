import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectShopData = createSelector([selectShop], (shop) => shop.shopData)

export const selectShopDataForPreview = createSelector([selectShopData], (shopData) => {
  const keys = Object.keys(shopData)
  return keys.map((key) => shopData[key] )

} )

export const selectCollection = createSelector([selectShopData, (state, targetCollection) => targetCollection], (collections, targetCollection) => {
  return   collections[targetCollection]
}
)