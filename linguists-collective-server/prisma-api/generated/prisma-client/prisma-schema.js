module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateJob {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Job {
  id: ID!
  title: String!
  description: String!
  languages: [String!]!
  associateType: String!
  published: Boolean!
  accepted: Boolean!
  date: String!
  location: String!
  client: User!
  associate: User
  currency: String!
  bill: Int!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type JobConnection {
  pageInfo: PageInfo!
  edges: [JobEdge]!
  aggregate: AggregateJob!
}

input JobCreateInput {
  id: ID
  title: String!
  description: String!
  languages: JobCreatelanguagesInput
  associateType: String!
  published: Boolean
  accepted: Boolean
  date: String!
  location: String!
  client: UserCreateOneWithoutJobsPostedInput!
  associate: UserCreateOneWithoutJobsInput
  currency: String!
  bill: Int!
}

input JobCreatelanguagesInput {
  set: [String!]
}

input JobCreateManyWithoutAssociateInput {
  create: [JobCreateWithoutAssociateInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateManyWithoutClientInput {
  create: [JobCreateWithoutClientInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateWithoutAssociateInput {
  id: ID
  title: String!
  description: String!
  languages: JobCreatelanguagesInput
  associateType: String!
  published: Boolean
  accepted: Boolean
  date: String!
  location: String!
  client: UserCreateOneWithoutJobsPostedInput!
  currency: String!
  bill: Int!
}

input JobCreateWithoutClientInput {
  id: ID
  title: String!
  description: String!
  languages: JobCreatelanguagesInput
  associateType: String!
  published: Boolean
  accepted: Boolean
  date: String!
  location: String!
  associate: UserCreateOneWithoutJobsInput
  currency: String!
  bill: Int!
}

type JobEdge {
  node: Job!
  cursor: String!
}

enum JobOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  associateType_ASC
  associateType_DESC
  published_ASC
  published_DESC
  accepted_ASC
  accepted_DESC
  date_ASC
  date_DESC
  location_ASC
  location_DESC
  currency_ASC
  currency_DESC
  bill_ASC
  bill_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type JobPreviousValues {
  id: ID!
  title: String!
  description: String!
  languages: [String!]!
  associateType: String!
  published: Boolean!
  accepted: Boolean!
  date: String!
  location: String!
  currency: String!
  bill: Int!
  updatedAt: DateTime!
  createdAt: DateTime!
}

input JobScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  associateType: String
  associateType_not: String
  associateType_in: [String!]
  associateType_not_in: [String!]
  associateType_lt: String
  associateType_lte: String
  associateType_gt: String
  associateType_gte: String
  associateType_contains: String
  associateType_not_contains: String
  associateType_starts_with: String
  associateType_not_starts_with: String
  associateType_ends_with: String
  associateType_not_ends_with: String
  published: Boolean
  published_not: Boolean
  accepted: Boolean
  accepted_not: Boolean
  date: String
  date_not: String
  date_in: [String!]
  date_not_in: [String!]
  date_lt: String
  date_lte: String
  date_gt: String
  date_gte: String
  date_contains: String
  date_not_contains: String
  date_starts_with: String
  date_not_starts_with: String
  date_ends_with: String
  date_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  bill: Int
  bill_not: Int
  bill_in: [Int!]
  bill_not_in: [Int!]
  bill_lt: Int
  bill_lte: Int
  bill_gt: Int
  bill_gte: Int
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [JobScalarWhereInput!]
  OR: [JobScalarWhereInput!]
  NOT: [JobScalarWhereInput!]
}

type JobSubscriptionPayload {
  mutation: MutationType!
  node: Job
  updatedFields: [String!]
  previousValues: JobPreviousValues
}

input JobSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JobWhereInput
  AND: [JobSubscriptionWhereInput!]
  OR: [JobSubscriptionWhereInput!]
  NOT: [JobSubscriptionWhereInput!]
}

input JobUpdateInput {
  title: String
  description: String
  languages: JobUpdatelanguagesInput
  associateType: String
  published: Boolean
  accepted: Boolean
  date: String
  location: String
  client: UserUpdateOneRequiredWithoutJobsPostedInput
  associate: UserUpdateOneWithoutJobsInput
  currency: String
  bill: Int
}

input JobUpdatelanguagesInput {
  set: [String!]
}

input JobUpdateManyDataInput {
  title: String
  description: String
  languages: JobUpdatelanguagesInput
  associateType: String
  published: Boolean
  accepted: Boolean
  date: String
  location: String
  currency: String
  bill: Int
}

input JobUpdateManyMutationInput {
  title: String
  description: String
  languages: JobUpdatelanguagesInput
  associateType: String
  published: Boolean
  accepted: Boolean
  date: String
  location: String
  currency: String
  bill: Int
}

input JobUpdateManyWithoutAssociateInput {
  create: [JobCreateWithoutAssociateInput!]
  delete: [JobWhereUniqueInput!]
  connect: [JobWhereUniqueInput!]
  set: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutAssociateInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutAssociateInput!]
  deleteMany: [JobScalarWhereInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
}

input JobUpdateManyWithoutClientInput {
  create: [JobCreateWithoutClientInput!]
  delete: [JobWhereUniqueInput!]
  connect: [JobWhereUniqueInput!]
  set: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutClientInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutClientInput!]
  deleteMany: [JobScalarWhereInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
}

input JobUpdateManyWithWhereNestedInput {
  where: JobScalarWhereInput!
  data: JobUpdateManyDataInput!
}

input JobUpdateWithoutAssociateDataInput {
  title: String
  description: String
  languages: JobUpdatelanguagesInput
  associateType: String
  published: Boolean
  accepted: Boolean
  date: String
  location: String
  client: UserUpdateOneRequiredWithoutJobsPostedInput
  currency: String
  bill: Int
}

input JobUpdateWithoutClientDataInput {
  title: String
  description: String
  languages: JobUpdatelanguagesInput
  associateType: String
  published: Boolean
  accepted: Boolean
  date: String
  location: String
  associate: UserUpdateOneWithoutJobsInput
  currency: String
  bill: Int
}

input JobUpdateWithWhereUniqueWithoutAssociateInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutAssociateDataInput!
}

input JobUpdateWithWhereUniqueWithoutClientInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutClientDataInput!
}

input JobUpsertWithWhereUniqueWithoutAssociateInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutAssociateDataInput!
  create: JobCreateWithoutAssociateInput!
}

input JobUpsertWithWhereUniqueWithoutClientInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutClientDataInput!
  create: JobCreateWithoutClientInput!
}

input JobWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  associateType: String
  associateType_not: String
  associateType_in: [String!]
  associateType_not_in: [String!]
  associateType_lt: String
  associateType_lte: String
  associateType_gt: String
  associateType_gte: String
  associateType_contains: String
  associateType_not_contains: String
  associateType_starts_with: String
  associateType_not_starts_with: String
  associateType_ends_with: String
  associateType_not_ends_with: String
  published: Boolean
  published_not: Boolean
  accepted: Boolean
  accepted_not: Boolean
  date: String
  date_not: String
  date_in: [String!]
  date_not_in: [String!]
  date_lt: String
  date_lte: String
  date_gt: String
  date_gte: String
  date_contains: String
  date_not_contains: String
  date_starts_with: String
  date_not_starts_with: String
  date_ends_with: String
  date_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  client: UserWhereInput
  associate: UserWhereInput
  currency: String
  currency_not: String
  currency_in: [String!]
  currency_not_in: [String!]
  currency_lt: String
  currency_lte: String
  currency_gt: String
  currency_gte: String
  currency_contains: String
  currency_not_contains: String
  currency_starts_with: String
  currency_not_starts_with: String
  currency_ends_with: String
  currency_not_ends_with: String
  bill: Int
  bill_not: Int
  bill_in: [Int!]
  bill_not_in: [Int!]
  bill_lt: Int
  bill_lte: Int
  bill_gt: Int
  bill_gte: Int
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [JobWhereInput!]
  OR: [JobWhereInput!]
  NOT: [JobWhereInput!]
}

input JobWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createJob(data: JobCreateInput!): Job!
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updateManyJobs(data: JobUpdateManyMutationInput!, where: JobWhereInput): BatchPayload!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  deleteJob(where: JobWhereUniqueInput!): Job
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  job(where: JobWhereUniqueInput!): Job
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  address: String
  phoneNumber: String!
  available: Boolean!
  languages: [String!]!
  isAssociate: Boolean!
  associateTypes: [String!]!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  jobsPosted(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  accumulatedInvoice: Int!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateassociateTypesInput {
  set: [String!]
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  address: String
  phoneNumber: String!
  available: Boolean
  languages: UserCreatelanguagesInput
  isAssociate: Boolean
  associateTypes: UserCreateassociateTypesInput
  jobs: JobCreateManyWithoutAssociateInput
  jobsPosted: JobCreateManyWithoutClientInput
  accumulatedInvoice: Int
}

input UserCreatelanguagesInput {
  set: [String!]
}

input UserCreateOneWithoutJobsInput {
  create: UserCreateWithoutJobsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutJobsPostedInput {
  create: UserCreateWithoutJobsPostedInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutJobsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  address: String
  phoneNumber: String!
  available: Boolean
  languages: UserCreatelanguagesInput
  isAssociate: Boolean
  associateTypes: UserCreateassociateTypesInput
  jobsPosted: JobCreateManyWithoutClientInput
  accumulatedInvoice: Int
}

input UserCreateWithoutJobsPostedInput {
  id: ID
  name: String!
  email: String!
  password: String!
  address: String
  phoneNumber: String!
  available: Boolean
  languages: UserCreatelanguagesInput
  isAssociate: Boolean
  associateTypes: UserCreateassociateTypesInput
  jobs: JobCreateManyWithoutAssociateInput
  accumulatedInvoice: Int
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  address_ASC
  address_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  available_ASC
  available_DESC
  isAssociate_ASC
  isAssociate_DESC
  accumulatedInvoice_ASC
  accumulatedInvoice_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  address: String
  phoneNumber: String!
  available: Boolean!
  languages: [String!]!
  isAssociate: Boolean!
  associateTypes: [String!]!
  accumulatedInvoice: Int!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateassociateTypesInput {
  set: [String!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  address: String
  phoneNumber: String
  available: Boolean
  languages: UserUpdatelanguagesInput
  isAssociate: Boolean
  associateTypes: UserUpdateassociateTypesInput
  jobs: JobUpdateManyWithoutAssociateInput
  jobsPosted: JobUpdateManyWithoutClientInput
  accumulatedInvoice: Int
}

input UserUpdatelanguagesInput {
  set: [String!]
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
  address: String
  phoneNumber: String
  available: Boolean
  languages: UserUpdatelanguagesInput
  isAssociate: Boolean
  associateTypes: UserUpdateassociateTypesInput
  accumulatedInvoice: Int
}

input UserUpdateOneRequiredWithoutJobsPostedInput {
  create: UserCreateWithoutJobsPostedInput
  update: UserUpdateWithoutJobsPostedDataInput
  upsert: UserUpsertWithoutJobsPostedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutJobsInput {
  create: UserCreateWithoutJobsInput
  update: UserUpdateWithoutJobsDataInput
  upsert: UserUpsertWithoutJobsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutJobsDataInput {
  name: String
  email: String
  password: String
  address: String
  phoneNumber: String
  available: Boolean
  languages: UserUpdatelanguagesInput
  isAssociate: Boolean
  associateTypes: UserUpdateassociateTypesInput
  jobsPosted: JobUpdateManyWithoutClientInput
  accumulatedInvoice: Int
}

input UserUpdateWithoutJobsPostedDataInput {
  name: String
  email: String
  password: String
  address: String
  phoneNumber: String
  available: Boolean
  languages: UserUpdatelanguagesInput
  isAssociate: Boolean
  associateTypes: UserUpdateassociateTypesInput
  jobs: JobUpdateManyWithoutAssociateInput
  accumulatedInvoice: Int
}

input UserUpsertWithoutJobsInput {
  update: UserUpdateWithoutJobsDataInput!
  create: UserCreateWithoutJobsInput!
}

input UserUpsertWithoutJobsPostedInput {
  update: UserUpdateWithoutJobsPostedDataInput!
  create: UserCreateWithoutJobsPostedInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  available: Boolean
  available_not: Boolean
  isAssociate: Boolean
  isAssociate_not: Boolean
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
  jobsPosted_every: JobWhereInput
  jobsPosted_some: JobWhereInput
  jobsPosted_none: JobWhereInput
  accumulatedInvoice: Int
  accumulatedInvoice_not: Int
  accumulatedInvoice_in: [Int!]
  accumulatedInvoice_not_in: [Int!]
  accumulatedInvoice_lt: Int
  accumulatedInvoice_lte: Int
  accumulatedInvoice_gt: Int
  accumulatedInvoice_gte: Int
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  phoneNumber: String
}
`
      }
    