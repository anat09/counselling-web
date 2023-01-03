import React from 'react';
import { NextPageContext } from 'next';

import AdminPage from '../horizon-ui/pages/admin/page';
import { debug } from '../actions/debug';
import { getAdminProps } from '../getAdminProps';

export default function Admin() {
  React.useEffect(() => {
    const fetch = async () => {
      await debug()
    }
    fetch()
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  }, [])
  return <AdminPage />
}

export async function getServerSideProps(context: NextPageContext) {
	return await getAdminProps(context)
}