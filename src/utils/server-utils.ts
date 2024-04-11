import 'server-only'

export const serverSideFunction = () => {
  console.log(`use multiple libraries,
                user environment variables,
                interact with a database,
                process confidental information`)
  return 'server result'
}
