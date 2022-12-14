import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
  DELETE_JOB_BEGIN,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  SHOW_STATS_BEGIN,
  SHOW_STATS_SUCCESS,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_STAFFLIST_BEGIN,
  GET_STAFFLIST_SUCCESS,
  GET_ALUMNI_BEGIN,
  GET_ALUMNI_SUCCESS,
  GET_PARTNER_BEGIN,
  GET_PARTNER_SUCCESS,
  GET_STUDENT_BEGIN,
  GET_STUDENT_SUCCESS,
  GET_FILTERED_USER_BASE_ON_PROJECT_REQUIREMENT,
  STOP_LOADING,
  FETCH_PROJECT_LOGS,
  GET_REPORT_DETAILS_SUCCESS,
  UPDATE_RECORDS,
  START_LOADING,
  GET_ALL_MEMBERS,
} from "./actions";

import { initialState } from "./appContext";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  if (action.type === SETUP_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    console.log("setup user", action.payload);
    return {
      ...state,
      isLoading: true,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      description: action.payload.description,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      description: "",
      userLocation: "",
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      description: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: "User Profile Updated!",
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editJobId: "",
      title: "",
      owner: "",
      description: "",
      jobType: "full-time",
      status: "pending",
      startDate: "",
      endDate: "",
      requirement: "",
      teamMembers: {
        studentList: [],
        alumniList: [],
        staffList: [],
      },
      filteredUserBasedOnProjectRequirement: []
    };

    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === CREATE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === CREATE_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Project Created!",
    };
  }
  if (action.type === CREATE_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.myJobs.find((job) => job._id === action.payload.id);
    const { _id, title, owner, description, jobType, status, startDate, endDate, requirement, teamMembers } = job;
    return {
      ...state,
      isEditing: true,
      editJobId: _id,
      title,
      owner,
      description,
      jobType,
      status,
      startDate, 
      endDate, 
      requirement,
      teamMembers
    };
  }
  if (action.type === DELETE_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Project Updated!",
    };
  }
  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === SHOW_STATS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === SHOW_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: "",
      searchStatus: "all",
      searchType: "all",
      sort: "latest",
    };
  } 
  if (action.type === CHANGE_PAGE) {
    return { ...state, page: action.payload.page };
  }
  if (action.type === GET_STAFFLIST_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_STAFFLIST_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      staffList: action.payload.staffList,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === GET_ALUMNI_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_ALUMNI_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      alumniList: action.payload.alumniList,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === GET_PARTNER_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_PARTNER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      partnerList: action.payload.partnerList,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === GET_STUDENT_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_STUDENT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      studentList: action.payload.studentList,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === GET_FILTERED_USER_BASE_ON_PROJECT_REQUIREMENT) {
    return {
      ...state,
      filteredUserBasedOnProjectRequirement: action.payload,
    };
  }
  if (action.type === STOP_LOADING) {
    return {
      ...state, 
      isLoading: false
    }
  }
  if (action.type === FETCH_PROJECT_LOGS) {
    return {
      ...state,
      projectLogs: action.payload
    }
  }
  if (action.type === START_LOADING) {
    return {
      ...state,
      isLoading: true
    }
  }
  if (action.type === GET_REPORT_DETAILS_SUCCESS) {
    return {
      ...state,
      financialOwnerId: action.payload._id,
      initialCost: action.payload.initialCost,
      records: action.payload.records,
      chartRecords: action.payload.records,
    };
  }
  if (action.type === UPDATE_RECORDS) {
    return {
      ...state,
      records: action.payload,
    };
  }
  if (action.type === GET_ALL_MEMBERS) {
    return {
      ...state,
      allMemberForProject: action.payload
    };
  }
    throw new Error(`no such action : ${action.type}`);
};

export default reducer;
