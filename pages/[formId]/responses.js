import axios from 'axios';
import { useState } from 'react';
import Error from '../../UI-Components/error';
import Loader from '../../UI-Components/loader';
import RadioButton from '../../UI-Components/RadioButton';
import { useQuery, useQueryClient } from 'react-query';
import Notification from '../../UI-Components/notification';
import UserDetails from '../../UI-Components/userDetail';
import DownloadIcon from '../../icons/download';
import styles from '../../styles/Responses.module.css';
import { useRouter } from 'next/router';
import DeleteIcon from '../../icons/delete';
import Modal from '../../UI-Components/modal';
import ViewIcon from '../../icons/view';
import FormBackLayout from '../../layout/FormBackLayout/formBackLayout';
import AddResponses from '../../components/addResponses';
import SendMail from '../../components/sendMail';
import Head from 'next/head';
import csvDownload from 'json-to-csv-export';

export default function Responses() {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const [modal, setModal] = useState(false);
  const [addRes, setAddRes] = useState(false);
  const [notify, setNotify] = useState(false);
  // const [mail, setMail] = useState(false);

  const [showResponse, setShowResponse] = useState(false);
  const [showMail, setShowMail] = useState(false);

  const [selectedOrders, setSelectedOrders] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [applicant, setApplicant] = useState({});

  const header = [
    'OrderId',
    'Name',
    'Email',
    'Institute',
    'Membership Type',
    'Category',
    'Amount',
    'Payment Status',
    'Action',
  ];
  const router = useRouter();
  const formId = router.query.formId;
  const queryClient = useQueryClient();

  const getData = async () => {
    try {
      const res = await axios.get(`/api/form/responses?formId=${formId}`);
      return res;
    } catch (err) {
      setError(true);
      setErrorMsg(err.response !== undefined ? err.response.data.error : err);
    }
  };

  const { isLoading, data } = useQuery('repoData', getData, {
    enabled: formId !== undefined ? true : false,
  });

  const createCsv = () => {
    // var g = [];
    // data.data.responses.forEach((val) => {
    //    // val.paymentStatus === 'success' &&
    //     // new Date(val.createdAt).toISOString() >= '2022-10-07T04:29:59.059Z'
    //   if ("a"==="a") {
    //     var amt = JSON.parse(val.amount).amount;
    //     var cur = JSON.parse(val.amount).currency;
    //     var a = getPriceBreakdown(val);
    //     g.push({
    //       amt,
    //       currency: cur,
    //       a,
    //       ...val,
    //     });
    //   }
    // });
    // var dataStr =
    //   'data:text/json;charset=utf-8,' +
    //   encodeURIComponent(JSON.stringify(data.data.responses));
    // var downloadAnchorNode = document.createElement('a');
    // downloadAnchorNode.setAttribute('href', dataStr);
    // downloadAnchorNode.setAttribute('download', 'Responses' + '.json');
    // document.body.appendChild(downloadAnchorNode); // required for firefox
    // downloadAnchorNode.click();
    // downloadAnchorNode.remove();

    var g = data.data.responses;
    var a = Object.keys(data.data.responses[1]);
    var a3 = [];
    g.forEach((val) => {
      // if (val.amount !== undefined) {
      //   a.push({ ...val, amount: JSON.parse(val.amount).ownerAmt });
      // } else {
      //   a.push({ ...val });
      // }
      a3.push({
        ...val,
        volunteering: val.volunteering !== undefined ? val.volunteering.replace(/(\r\n|\n|\r)/gm, "") : '',
      });
    });

    var config = {
      data:  data.data.responses,
      filename: 'Responses',
      delimiter: ',',
      headers: Object.keys(data.data.responses[1]),
    };

    csvDownload(config);
  };

  const sendNotification = async () => {
    try {
      setNotify(false);
    } catch (err) {
      setError(true);
      setErrorMsg(err.response !== undefined ? err.response.data.error : err);
    }
  };

  const handleSelect = (val) => {
    if (selectedOrders.some((res) => res.orderId === val.orderId)) {
      const newOrders = selectedOrders.filter(
        (res) => res.orderId !== val.orderId
      );
      setSelectedOrders(newOrders);
    } else {
      setSelectedOrders((prevState) => [val, ...prevState]);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/form/response?orderId=${deleteId}`);
      setModal(false);
      queryClient.invalidateQueries('repoData');
    } catch (err) {
      setError(true);
      setErrorMsg(err.response !== undefined ? err.response.data.error : err);
    }
  };

  const handleAddResponses = async (data) => {
    setLoading(true);
    try {
      await axios.post(`/api/form/addresponses?formId=wlc`, data);
      setLoading(false);
      setAddRes(false);
      setNotification(true);
      setNotificationMsg('Added the new responses');
      queryClient.invalidateQueries('repoData');
    } catch (err) {
      setError(true);
      setLoading(false);
      setErrorMsg(err.response !== undefined ? err.response.data.error : err);
    }
  };

  const handleSendMail = async (data) => {
    setLoading(true);
    try {
      await axios.post('/api/form/mail', data);
      setShowMail(false);
      setNotification(true);
      setNotificationMsg('Mail has send');
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      setErrorMsg(err.response !== undefined ? err.response.data.error : err);
    }
  };

  return (
    <FormBackLayout>
      <Head>
        <title>Responses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {mail ? (
        <Modal
          setModal={setMail}
          title="Are you sure to delete this response"
          handleSubmit={handleDelete}
        />
      ) : null} */}
      {modal ? (
        <Modal
          setModal={setModal}
          title="Are you sure to delete this response"
          handleSubmit={handleDelete}
        />
      ) : null}

      {showResponse ? (
        <UserDetails data={applicant} setShow={setShowResponse} />
      ) : null}
      {showMail ? (
        <SendMail
          loading={loading}
          setModal={setShowMail}
          handleSubmit={handleSendMail}
          data={selectedOrders}
        />
      ) : null}
      {addRes ? (
        <AddResponses
          loading={loading}
          setModal={setAddRes}
          handleSubmit={handleAddResponses}
        />
      ) : null}

      {notification ? (
        <Notification msg={notificationMsg} setNotify={setNotification} />
      ) : null}
      {notify ? (
        <Modal
          setModal={setNotify}
          title="Are you sure to send the payment link to those who have not completed the payment"
          handleSubmit={sendNotification}
        />
      ) : null}
      {error ? <Error setError={setError} msg={errorMsg} /> : null}

      <div className={styles.responses}>
        {isLoading ? (
          <Loader msg="Loading data" />
        ) : (
          <div>
            <h3 className={styles.title}>
              {data !== undefined ? data.data.title : null}
            </h3>

            <p>
              Total responses :{' '}
              {data !== undefined ? data.data.responses.length : null}
            </p>

            {data !== undefined ? (
              <>
                <p>
                  Success :{' '}
                  {
                    data.data.responses.filter(
                      (e) => e.paymentStatus === 'success'
                    ).length
                  }
                  &nbsp; Pending :{' '}
                  {
                    data.data.responses.filter(
                      (e) => e.paymentStatus === 'pending'
                    ).length
                  }
                  &nbsp; Failed :{' '}
                  {
                    data.data.responses.filter(
                      (e) => e.paymentStatus === 'failed'
                    ).length
                  }
                </p>
              </>
            ) : null}

            <div className={styles.responses_tools}>
              {/* <Input
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for users, email address..."
              /> */}
              <div className={styles.responses_buttons}>
                {/* <div
                  className={styles.responses_button}
                  onClick={() => setNotify(true)}
                >
                  <SendIcon />
                  <p className={styles.responses_p}>Send notification</p>
                </div>
                <div
                  className={styles.responses_button}
                  onClick={() => setShowMail(true)}
                >
                  <SendIcon />
                  <p className={styles.responses_p}>Send mail</p>
                </div> */}
                <div
                  className={styles.responses_button}
                  onClick={() => createCsv()}
                >
                  <DownloadIcon />
                  <p className={styles.responses_p}>Download CSV</p>
                </div>
              </div>
            </div>
            <div className={styles.response_options}>
              <div className={styles.filterByPayStatus}>
                <p
                  className={styles.filterByPayStatusLabel}
                  style={
                    searchTerm === ''
                      ? { backgroundColor: '#1479ff', color: 'white' }
                      : {}
                  }
                  onClick={() => setSearchTerm('')}
                >
                  All
                </p>
                <p
                  className={styles.filterByPayStatusLabel}
                  style={
                    searchTerm === 'success'
                      ? { backgroundColor: '#1479ff', color: 'white' }
                      : {}
                  }
                  onClick={() => setSearchTerm('success')}
                >
                  Success
                </p>
                <p
                  className={styles.filterByPayStatusLabel}
                  style={
                    searchTerm === 'pending'
                      ? { backgroundColor: '#1479ff', color: 'white' }
                      : {}
                  }
                  onClick={() => setSearchTerm('pending')}
                >
                  Pending
                </p>
                <p
                  className={styles.filterByPayStatusLabel}
                  style={
                    searchTerm === 'failed'
                      ? { backgroundColor: '#1479ff', color: 'white' }
                      : {}
                  }
                  onClick={() => setSearchTerm('failed')}
                >
                  Failed
                </p>
              </div>
              <div>
                {/* <button
                  className={styles.responses_button}
                  onClick={() => setAddRes(true)}
                >
                  Add responses
                </button> */}
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.table_row}>
                <div className={styles.table_header}>
                  {data !== undefined ? (
                    <RadioButton
                      onClick={() =>
                        !(selectedOrders.length === data.data.responses.length)
                          ? setSelectedOrders(data.data.responses)
                          : setSelectedOrders([])
                      }
                      checked={
                        selectedOrders.length === data.data.responses.length
                          ? true
                          : false
                      }
                    />
                  ) : null}
                </div>
                {header.map((val, key) => (
                  <div key={key} className={styles.table_header}>
                    {val}
                  </div>
                ))}
              </div>
              {data !== undefined
                ? data.data.responses
                    .filter((n) => {
                      if (
                        `${n.firstName + ' ' + n.lastName}`
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        n.email
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        n.paymentStatus
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) ||
                        n.orderId.includes(searchTerm.toLowerCase())
                      ) {
                        return n;
                      } else {
                        return null;
                      }
                    })
                    .map((val, key) => (
                      <div key={key} className={styles.table_row}>
                        <div className={styles.table_item}>
                          <RadioButton
                            onClick={() => handleSelect(val)}
                            checked={
                              selectedOrders.some(
                                (res) => res.orderId === val.orderId
                              ) !== undefined
                                ? selectedOrders.some(
                                    (res) => res.orderId === val.orderId
                                  )
                                : false
                            }
                          />
                        </div>
                        <div className={styles.table_item}>{val.orderId}</div>
                        <div className={styles.table_item}>
                          {val.firstName !== undefined
                            ? val.firstName + ' ' + val.lastName
                            : val.name}
                        </div>
                        <div className={styles.table_item}>{val.email}</div>
                        <div className={styles.table_item}>{val.institute}</div>

                        <div className={styles.table_item}>
                          {/* {val.membershipType} */}
                          {val.validIEEE || val.validIEEE !== ''
                            ? 'IEEE Member'
                            : 'Non IEEE Member'}
                        </div>
                        <div className={styles.table_item} name={val.category}>
                          {val.category}
                        </div>
                        <div className={styles.table_item}>
                          {val.amount !== undefined ? (
                            <>
                              {' '}
                              {JSON.parse(val.amount).currency === 'USD'
                                ? '$'
                                : '₹'}{' '}
                              {JSON.parse(val.amount).ownerAmt}
                            </>
                          ) : (
                            'Free'
                          )}
                        </div>

                        <div className={styles.table_item}>
                          <div
                            className={styles.table_item_status}
                            style={
                              val.paymentStatus === 'pending'
                                ? {
                                    color: '#f39c12',
                                    backgroundColor: 'var(--pending-back)',
                                  }
                                : val.paymentStatus === 'success'
                                ? {
                                    color: '#12b268',
                                    backgroundColor: 'var(--success-back)',
                                  }
                                : {
                                    color: '#f8ecee',
                                    backgroundColor: 'var(--failed-back)',
                                  }
                            }
                          >
                            {val.paymentStatus}
                          </div>
                        </div>
                        <div className={styles.table_item}>
                          <div className={styles.table_icon}>
                            <div
                              className={styles.table_icon_container}
                              onClick={() => {
                                setApplicant(val);
                                setShowResponse(true);
                              }}
                            >
                              <ViewIcon />
                            </div>
                          </div>
                          <div
                            className={styles.table_icon}
                            onClick={() => {
                              setDeleteId(val.orderId);
                              setModal(true);
                            }}
                          >
                            <div className={styles.table_icon_container}>
                              <DeleteIcon />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                : null}
            </div>
          </div>
        )}
      </div>
    </FormBackLayout>
  );
}
