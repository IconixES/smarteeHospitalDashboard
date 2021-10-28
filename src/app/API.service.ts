/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateHospitalTagsInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
};

export type ModelHospitalTagsConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  mac?: ModelStringInput | null;
  sos?: ModelStringInput | null;
  tagType?: ModelStringInput | null;
  reader?: ModelStringInput | null;
  rssi?: ModelIntInput | null;
  stamp?: ModelStringInput | null;
  and?: Array<ModelHospitalTagsConditionInput | null> | null;
  or?: Array<ModelHospitalTagsConditionInput | null> | null;
  not?: ModelHospitalTagsConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type HospitalTags = {
  __typename: "HospitalTags";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHospitalTagsInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
};

export type DeleteHospitalTagsInput = {
  id: string;
};

export type CreateHospitalTrackingInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
};

export type ModelHospitalTrackingConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  mac?: ModelStringInput | null;
  sos?: ModelStringInput | null;
  tagType?: ModelStringInput | null;
  reader?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  rssi?: ModelStringInput | null;
  and?: Array<ModelHospitalTrackingConditionInput | null> | null;
  or?: Array<ModelHospitalTrackingConditionInput | null> | null;
  not?: ModelHospitalTrackingConditionInput | null;
};

export type HospitalTracking = {
  __typename: "HospitalTracking";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
  updatedAt: string;
};

export type UpdateHospitalTrackingInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
};

export type DeleteHospitalTrackingInput = {
  id: string;
};

export type ModelHospitalTagsFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  mac?: ModelStringInput | null;
  sos?: ModelStringInput | null;
  tagType?: ModelStringInput | null;
  reader?: ModelStringInput | null;
  rssi?: ModelIntInput | null;
  stamp?: ModelStringInput | null;
  and?: Array<ModelHospitalTagsFilterInput | null> | null;
  or?: Array<ModelHospitalTagsFilterInput | null> | null;
  not?: ModelHospitalTagsFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelHospitalTagsConnection = {
  __typename: "ModelHospitalTagsConnection";
  items?: Array<HospitalTags | null> | null;
  nextToken?: string | null;
};

export type ModelHospitalTrackingFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  mac?: ModelStringInput | null;
  sos?: ModelStringInput | null;
  tagType?: ModelStringInput | null;
  reader?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  rssi?: ModelStringInput | null;
  and?: Array<ModelHospitalTrackingFilterInput | null> | null;
  or?: Array<ModelHospitalTrackingFilterInput | null> | null;
  not?: ModelHospitalTrackingFilterInput | null;
};

export type ModelHospitalTrackingConnection = {
  __typename: "ModelHospitalTrackingConnection";
  items?: Array<HospitalTracking | null> | null;
  nextToken?: string | null;
};

export type CreateHospitalTagsMutation = {
  __typename: "HospitalTags";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateHospitalTagsMutation = {
  __typename: "HospitalTags";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteHospitalTagsMutation = {
  __typename: "HospitalTags";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateHospitalTrackingMutation = {
  __typename: "HospitalTracking";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
  updatedAt: string;
};

export type UpdateHospitalTrackingMutation = {
  __typename: "HospitalTracking";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
  updatedAt: string;
};

export type DeleteHospitalTrackingMutation = {
  __typename: "HospitalTracking";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
  updatedAt: string;
};

export type GetHospitalTagsQuery = {
  __typename: "HospitalTags";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListHospitalTagsQuery = {
  __typename: "ModelHospitalTagsConnection";
  items?: Array<{
    __typename: "HospitalTags";
    id: string;
    name: string;
    description?: string | null;
    mac?: string | null;
    sos?: string | null;
    tagType?: string | null;
    reader?: string | null;
    rssi?: number | null;
    stamp?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetHospitalTrackingQuery = {
  __typename: "HospitalTracking";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
  updatedAt: string;
};

export type ListHospitalTrackingsQuery = {
  __typename: "ModelHospitalTrackingConnection";
  items?: Array<{
    __typename: "HospitalTracking";
    id: string;
    name: string;
    description?: string | null;
    mac?: string | null;
    sos?: string | null;
    tagType?: string | null;
    reader?: string | null;
    createdAt?: string | null;
    rssi?: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateHospitalTagsSubscription = {
  __typename: "HospitalTags";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateHospitalTagsSubscription = {
  __typename: "HospitalTags";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
  createdAt: string;
  updatedAt: string;
  onUpdateHospitalTags: any;
};

export type OnDeleteHospitalTagsSubscription = {
  __typename: "HospitalTags";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  rssi?: number | null;
  stamp?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateHospitalTrackingSubscription = {
  __typename: "HospitalTracking";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
  updatedAt: string;
};

export type OnUpdateHospitalTrackingSubscription = {
  __typename: "HospitalTracking";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
  updatedAt: string;
};

export type OnDeleteHospitalTrackingSubscription = {
  __typename: "HospitalTracking";
  id: string;
  name: string;
  description?: string | null;
  mac?: string | null;
  sos?: string | null;
  tagType?: string | null;
  reader?: string | null;
  createdAt?: string | null;
  rssi?: string | null;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateHospitalTags(
    input: CreateHospitalTagsInput,
    condition?: ModelHospitalTagsConditionInput
  ): Promise<CreateHospitalTagsMutation> {
    const statement = `mutation CreateHospitalTags($input: CreateHospitalTagsInput!, $condition: ModelHospitalTagsConditionInput) {
        createHospitalTags(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          rssi
          stamp
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHospitalTagsMutation>response.data.createHospitalTags;
  }
  async UpdateHospitalTags(
    input: UpdateHospitalTagsInput,
    condition?: ModelHospitalTagsConditionInput
  ): Promise<UpdateHospitalTagsMutation> {
    const statement = `mutation UpdateHospitalTags($input: UpdateHospitalTagsInput!, $condition: ModelHospitalTagsConditionInput) {
        updateHospitalTags(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          rssi
          stamp
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHospitalTagsMutation>response.data.updateHospitalTags;
  }
  async DeleteHospitalTags(
    input: DeleteHospitalTagsInput,
    condition?: ModelHospitalTagsConditionInput
  ): Promise<DeleteHospitalTagsMutation> {
    const statement = `mutation DeleteHospitalTags($input: DeleteHospitalTagsInput!, $condition: ModelHospitalTagsConditionInput) {
        deleteHospitalTags(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          rssi
          stamp
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHospitalTagsMutation>response.data.deleteHospitalTags;
  }
  async CreateHospitalTracking(
    input: CreateHospitalTrackingInput,
    condition?: ModelHospitalTrackingConditionInput
  ): Promise<CreateHospitalTrackingMutation> {
    const statement = `mutation CreateHospitalTracking($input: CreateHospitalTrackingInput!, $condition: ModelHospitalTrackingConditionInput) {
        createHospitalTracking(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          createdAt
          rssi
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateHospitalTrackingMutation>response.data.createHospitalTracking;
  }
  async UpdateHospitalTracking(
    input: UpdateHospitalTrackingInput,
    condition?: ModelHospitalTrackingConditionInput
  ): Promise<UpdateHospitalTrackingMutation> {
    const statement = `mutation UpdateHospitalTracking($input: UpdateHospitalTrackingInput!, $condition: ModelHospitalTrackingConditionInput) {
        updateHospitalTracking(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          createdAt
          rssi
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateHospitalTrackingMutation>response.data.updateHospitalTracking;
  }
  async DeleteHospitalTracking(
    input: DeleteHospitalTrackingInput,
    condition?: ModelHospitalTrackingConditionInput
  ): Promise<DeleteHospitalTrackingMutation> {
    const statement = `mutation DeleteHospitalTracking($input: DeleteHospitalTrackingInput!, $condition: ModelHospitalTrackingConditionInput) {
        deleteHospitalTracking(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          createdAt
          rssi
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteHospitalTrackingMutation>response.data.deleteHospitalTracking;
  }
  async GetHospitalTags(id: string): Promise<GetHospitalTagsQuery> {
    const statement = `query GetHospitalTags($id: ID!) {
        getHospitalTags(id: $id) {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          rssi
          stamp
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHospitalTagsQuery>response.data.getHospitalTags;
  }
  async ListHospitalTags(
    filter?: ModelHospitalTagsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHospitalTagsQuery> {
    const statement = `query ListHospitalTags($filter: ModelHospitalTagsFilterInput, $limit: Int, $nextToken: String) {
        listHospitalTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            mac
            sos
            tagType
            reader
            rssi
            stamp
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHospitalTagsQuery>response.data.listHospitalTags;
  }
  async GetHospitalTracking(id: string): Promise<GetHospitalTrackingQuery> {
    const statement = `query GetHospitalTracking($id: ID!) {
        getHospitalTracking(id: $id) {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          createdAt
          rssi
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetHospitalTrackingQuery>response.data.getHospitalTracking;
  }
  async ListHospitalTrackings(
    filter?: ModelHospitalTrackingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListHospitalTrackingsQuery> {
    const statement = `query ListHospitalTrackings($filter: ModelHospitalTrackingFilterInput, $limit: Int, $nextToken: String) {
        listHospitalTrackings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            mac
            sos
            tagType
            reader
            createdAt
            rssi
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListHospitalTrackingsQuery>response.data.listHospitalTrackings;
  }
  OnCreateHospitalTagsListener: Observable<
    SubscriptionResponse<OnCreateHospitalTagsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHospitalTags {
        onCreateHospitalTags {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          rssi
          stamp
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateHospitalTagsSubscription>>;

  OnUpdateHospitalTagsListener: Observable<
    SubscriptionResponse<OnUpdateHospitalTagsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHospitalTags {
        onUpdateHospitalTags {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          rssi
          stamp
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateHospitalTagsSubscription>>;

  OnDeleteHospitalTagsListener: Observable<
    SubscriptionResponse<OnDeleteHospitalTagsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHospitalTags {
        onDeleteHospitalTags {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          rssi
          stamp
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteHospitalTagsSubscription>>;

  OnCreateHospitalTrackingListener: Observable<
    SubscriptionResponse<OnCreateHospitalTrackingSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateHospitalTracking {
        onCreateHospitalTracking {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          createdAt
          rssi
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateHospitalTrackingSubscription>>;

  OnUpdateHospitalTrackingListener: Observable<
    SubscriptionResponse<OnUpdateHospitalTrackingSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateHospitalTracking {
        onUpdateHospitalTracking {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          createdAt
          rssi
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateHospitalTrackingSubscription>>;

  OnDeleteHospitalTrackingListener: Observable<
    SubscriptionResponse<OnDeleteHospitalTrackingSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteHospitalTracking {
        onDeleteHospitalTracking {
          __typename
          id
          name
          description
          mac
          sos
          tagType
          reader
          createdAt
          rssi
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteHospitalTrackingSubscription>>;
}
