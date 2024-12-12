import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a component that describes a specific nutrition fact, such as
 * protein or fat content.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function NutritionFactBadge(props) {
  const {
    color = '#FEB50A',
    dailyRecommendedColor = 'FFFFFF',
    dailyRecommendedPercentage = 14,
    name = 'Protein',
    textColor = '#000000',
    unit = 'g',
    value = 25,
  } = props;

  /**
   * Returns the bottom portion of the badge.
   * @returns {HTMLElement} The bottom portion of the badge.
   */
  const badgeBottom = () => (
    <div
      style={{
        borderBottom: `0.25em solid ${color}`,
        borderBottomLeftRadius: '6em',
        borderBottomRightRadius: '6em',
        borderLeft: `0.25em solid ${color}`,
        borderRight: `0.25em solid ${color}`,
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: color,
          borderBottomLeftRadius: '5em',
          borderBottomRightRadius: '5em',
          height: '2.5em',
          marginBottom: '0.25em',
          marginLeft: '0.25em',
          marginRight: '0.25em',
        }}
      />
    </div>
  );

  /**
   * Returns the middle portion of the badge (without any content).
   * @returns {HTMLElement} The middle portion of the badge.
   */
  const badgeMiddle = () => (
    <div
      style={{
        borderLeft: `0.25em solid ${color}`,
        borderRight: `0.25em solid ${color}`,
        height: '6em',
        position: 'relative',
        width: '100%',
      }}
    >
      <div
        style={{
          backgroundColor: color,
          bottom: '0',
          height: '30%',
          left: '0',
          marginLeft: '0.25em',
          marginRight: '0.25em',
          position: 'absolute',
          right: '0',
        }}
      />
    </div>
  );

  /**
   * Returns the top portion of the badge.
   * @returns {HTMLElement} The top portion of the badge.
   */
  const badgeTop = () => (
    <div
      style={{
        borderLeft: `0.25em solid ${color}`,
        borderRight: `0.25em solid ${color}`,
        borderTop: `0.25em solid ${color}`,
        borderTopLeftRadius: '6em',
        borderTopRightRadius: '6em',
        height: '3em',
        width: '100%',
      }}
    />
  );

  return (
    <div
      style={{
        boxSizing: 'content-box',
        position: 'relative',
        width: '6em',
      }}
    >
      <div
        style={{
          color: textColor,
          fontSize: '1em',
          fontWeight: 'bold',
          position: 'absolute',
          textAlign: 'center',
          textTransform: 'uppercase',
          top: '1.5em',
          left: '0.25em',
          transform: 'scale(1, 1.5)',
          width: '100%',
          zIndex: 9,
        }}
      >
        {name}
      </div>
      <div
        style={{
          bottom: '0.95em',
          color: dailyRecommendedColor,
          fontSize: '1.75em',
          fontWeight: 'bold',
          left: '0.13em',
          position: 'absolute',
          textAlign: 'center',
          transform: 'scale(1, 1.5)',
          width: '100%',
          zIndex: 9,
        }}
      >
        {dailyRecommendedPercentage}
        %
      </div>
      <div
        style={{
          color: textColor,
          fontWeight: 'bold',
          left: '0.25em',
          position: 'absolute',
          textAlign: 'center',
          top: '3em',
          width: '100%',
          zIndex: 9,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            fontSize: '1.75em',
            transform: 'scale(1, 1.5)',
            verticalAlign: 'bottom',
          }}
        >
          {value}
        </div>
        <div
          style={{
            display: 'inline-block',
            fontSize: '1em',
            transform: 'scale(1, 1.5)',
            verticalAlign: 'text-bottom',
            textTransform: 'uppercase',
          }}
        >
          {unit}
        </div>
      </div>
      {badgeTop()}
      {badgeMiddle()}
      {badgeBottom()}
    </div>
  );
}

export default NutritionFactBadge;

NutritionFactBadge.propTypes = {
  /**
   * Specifies the name or hex code of the badge color (i.e. the border and
   * background color)
   */
  color: PropTypes.string,

  /**
   * Specifies the name or hex code of the color of the text the daily
   * recommended amount is displayed in.
   */
  dailyRecommendedColor: PropTypes.string,

  /**
   * Specifies the percentage of the daily recommended intake for an average
   * person that the value represents. For example, 18.
   */
  dailyRecommendedPercentage: PropTypes.number,

  /**
   * Specifies the nutrition fact name that appears on the badge. For example,
   * Energy, Protein, Fat, Carbs, Sodium, etc.
   */
  name: PropTypes.string,

  /**
   * Specifies the name or hex code of text (except the daily recommended amount
   * percentage) that appears.
   */
  textColor: PropTypes.string,

  /**
   * Specifies the unit of measure the value is expressed in. For example, 'g'
   * for grams or 'kj' for kilojoules.
   */
  unit: PropTypes.string,

  /**
   * Specifies the value of the nutrition fact. For example, for 25 grams of
   * protein, this would specify: 25
   */
  value: PropTypes.number,
};
