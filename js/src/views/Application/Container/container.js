// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component, PropTypes } from 'react';

import { FirstRun, UpgradeParity } from '~/modals';
import { Errors, ParityBackground, Tooltips } from '~/ui';

import styles from '../application.css';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onCloseFirstRun: PropTypes.func,
    showFirstRun: PropTypes.bool,
    upgradeStore: PropTypes.object.isRequired
  };

  render () {
    const { children, onCloseFirstRun, showFirstRun, upgradeStore } = this.props;

    return (
      <ParityBackground
        attachDocument
        className={ styles.container }
      >
        <FirstRun
          onClose={ onCloseFirstRun }
          visible={ showFirstRun }
        />
        <Tooltips />
        <UpgradeParity store={ upgradeStore } />
        <Errors />
        { children }
      </ParityBackground>
    );
  }
}
