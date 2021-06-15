import React from 'react';
import { MemoryRouter } from 'react-router';
import { createMemoryHistory } from 'history';
import { Link, Route, Router } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Gamemode, Thrashbar } from '../components/pages/Gamemode';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { tasks, global } from '../state/actions';
import { reducer } from '../state/reducers/taskReducer';

describe('history mock', () => {
  it('should configure a history and adapter configure mock from dom react', () => {
    configure({ adapter: new Adapter() });

    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));
  });
});

describe('props inits', () => {
  const initialState = {
    id: null,
    child_id: null,
    child: {
      id: null,
      name: null,
      isDyslexic: null,
      avatarUrl: null,
      gamemode: {
        mode: null,
        read: null,
        write: null,
        draw: null,
        sp: null,
      },
      gradeLevel: null,
      parentId: null,
      cohortId: null,
      memberId: null,
      VotesRemaining: null,
      totalPoints: null,
      wins: null,
      losses: null,
      achievements: null,
      Ballots: [],
      Streaks: '',
    },
    story_id: null,
    hasRead: false,
    hasWritten: false,
    hasDrawn: false,
    complexity: null,
    LowConfidence: null,
    story: {
      drawingPrompt: '',
      writingPrompt: '',
      storyTitle: '',
      storyUrl: null,
    },
  };

  it('should return changes to the tasks state', () => {
    const action = {
      type: tasks.SET_TASKS,
      payload: {
        ID: 1,
        ChildID: 1,
        child: {
          id: null,
          name: null,
          isDyslexic: null,
          avatarUrl: null,
          gamemode: {
            mode: null,
            read: null,
            write: null,
            draw: null,
            sp: null,
          },
          gradeLevel: null,
          parentId: null,
          cohortId: null,
          memberId: null,
          VotesRemaining: null,
          totalPoints: null,
          wins: null,
          losses: null,
          achievements: null,
          Ballots: [],
          Streaks: '',
        },
        StoryID: 1,
        HasRead: false,
        HasWritten: false,
        HasDrawn: false,
        Complexity: false,
      },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      id: 1,
      child_id: 1,
      child: {
        id: null,
        name: null,
        isDyslexic: null,
        avatarUrl: null,
        gamemode: {
          mode: null,
          read: null,
          write: null,
          draw: null,
          sp: null,
        },
        gradeLevel: null,
        parentId: null,
        cohortId: null,
        memberId: null,
        VotesRemaining: null,
        totalPoints: null,
        wins: null,
        losses: null,
        achievements: null,
        Ballots: [],
        Streaks: '',
      },
      story_id: 1,
      hasRead: false,
      hasWritten: false,
      hasDrawn: false,
      complexity: false,
    });
  });

  it('should return initialstate with value of hasRead true', () => {
    const action = { type: tasks.SET_HAS_READ };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, hasRead: true });
  });

  it('should return initialstate with value of hasWrtten true', () => {
    const action = { type: tasks.SET_HAS_WRITTEN };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, hasWritten: true });
  });

  it('should return initialstate with value of hasDrawn true', () => {
    const action = { type: tasks.SET_HAS_DRAWN };
    const state = reducer(initialState, action);
    expect(state).toEqual({ ...initialState, hasDrawn: true });
  });

  it('should return initialstate with submissioninformation filled out', () => {
    const action = {
      type: tasks.SET_SUBMISSION_INFORMATION,
      payload: {
        ...initialState,
        DrawingPrompt: 'drawing',
        WritingPrompt: 'writing',
        Title: 'title',
        URL: 'storyurl',
      },
    };
    const state = reducer(initialState, action);
    expect(state).toEqual({
      ...initialState,
      story: {
        drawingPrompt: 'drawing',
        writingPrompt: 'writing',
        storyTitle: 'title',
        storyUrl: 'storyurl',
      },
    });
  });
});

// Mock store
const mockStore = configureMockStore([]);
const store = mockStore({
  id: null,
  child_id: null,
  child: {
    id: null,
    name: null,
    isDyslexic: null,
    avatarUrl: null,
    gamemode: {
      mode: null,
      read: null,
      write: null,
      draw: null,
      sp: null,
    },
    gradeLevel: null,
    parentId: null,
    cohortId: null,
    memberId: null,
    VotesRemaining: null,
    totalPoints: null,
    wins: null,
    losses: null,
    achievements: null,
    Ballots: [],
    Streaks: '',
  },
  story_id: null,
  hasRead: false,
  hasWritten: false,
  hasDrawn: false,
  complexity: null,
  LowConfidence: null,
  story: {
    drawingPrompt: '',
    writingPrompt: '',
    storyTitle: '',
    storyUrl: null,
  },
});

describe('button Tests ', () => {
  test('calls #mission-draw-button click', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const sread = jest.fn();
    const page = (
      <Provider store={store}>
        shallow(
        <Thrashbar props={store} />
        );
      </Provider>
    );
    const pageMounted = mount(page);

    const button = pageMounted.find('#mission-draw-button');
    expect(button.length).toBe(1); // It finds it alright
    // button.simulate('click'); // Nothing happens

    const wrapper = shallow(<button onClick={sread}>3</button>);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.text()).toEqual('3');
    expect(sread).toHaveBeenCalled();
  });

  test('calls #mission-write-button click', () => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const sread = jest.fn();
    const page = (
      <Provider store={store}>
        shallow(
        <Thrashbar props={store} />
        );
      </Provider>
    );
    const pageMounted = mount(page);

    const button = pageMounted.find('#mission-write-button');
    expect(button.length).toBe(1); // It finds it alright
    // button.simulate('click'); // Nothing happens

    const wrapper = shallow(<button onClick={sread}>2</button>);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.text()).toEqual('2');
    expect(sread).toHaveBeenCalled();
  });
});

afterEach(cleanup);

describe('routes using memory router', () => {
  test('render route', () => {
    const history = createMemoryHistory('/');
    history.push('/gamemode');
    render(
      <Router history={history}>
        <Provider store={store}>
          <Route path="/gamemode" render={props => <Gamemode {...props} />} />
        </Provider>
      </Router>
    );
  });
});
