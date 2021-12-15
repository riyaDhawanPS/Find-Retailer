/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'
import { useCssHandles } from 'vtex.css-handles'
import PhoneImage from './PhoneImage.svg';

const CSS_HANDLES = [
  'addressList',
  'addressListItem',
  'addressListFirstItem',
  'addressStoreName',
  'addressStoreAddress',
  'addressStoreAddressGroupA',
  'addressStoreAddressNumber',
  'addressStoreAddressStreet',
  'addressListLink',
] as const


const Listing: FC<any> = ({ items, onChangeCenter }) => {
  const handles = useCssHandles(CSS_HANDLES)


  const handleChangeCenter = (item: any, zoom: number) => {
    const { latitude, longitude } = item.address.location

    onChangeCenter([longitude, latitude], zoom)
  }

  return (
    items.length && (
      <ul className={`list ph3 mt0 ${handles.addressList}`}>
        {items.map((item: any, i: number) => {
          return (
            <li
              key={`key_${i}`}
              className={`mb0 ph3 pv5 ${!i ? handles.addressListFirstItem : ''
                } ${handles.addressListItem} ${!i ? 'bt' : ''
                } bb bl br b--light-gray hover-bg-light-gray`}
            >
              {/* Added a radio button to show it against each store */}
              <input type="radio" name="location" defaultChecked={i == 0 ? true : false} onClick={() => {
                handleChangeCenter(item, 12)
              }} />

              {""}
              <span className={`b ${handles.addressStoreName}`}>
                {" \t "} {" \t "}{item.name}
              </span>
              <br />
              <span className={`${handles.addressStoreAddress}`}>
                <span className={handles.addressStoreAddressGroupA}>
                  {item.address.street}
                  {item.address.postalCode ? `-  ${item.address.postalCode}` : null}
                  <br />
                </span>
                <span className={handles.addressStoreAddressGroupA}>
                  {item.instructions ? <img src={PhoneImage} alt="Phone Logo" style={{ height: 12 }} /> : null}
                  {item.instructions ? `  ${item.instructions}` : null}
                  <br />
                </span>
              </span>
              <br />
            </li>
          )
        })}
      </ul>
    )
  )
}

Listing.propTypes = {
  items: PropTypes.array,
  onChangeCenter: PropTypes.func,
}

export default injectIntl(Listing)
